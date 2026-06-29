'use client';

import { useCallback, useMemo, useSyncExternalStore } from 'react';

type QueryStateOptions<Value extends string> = {
  defaultValue: Value;
  key: string;
  values: readonly Value[];
};

export function useUrlQueryState<Value extends string>({
  defaultValue,
  key,
  values,
}: QueryStateOptions<Value>) {
  const readValue = useCallback(() => {
    const candidate = new URLSearchParams(window.location.search).get(key);
    return values.includes(candidate as Value) ? (candidate as Value) : defaultValue;
  }, [defaultValue, key, values]);

  const subscribe = useCallback((onStoreChange: () => void) => {
    window.addEventListener('popstate', onStoreChange);
    window.addEventListener('url-query-state-change', onStoreChange);
    return () => {
      window.removeEventListener('popstate', onStoreChange);
      window.removeEventListener('url-query-state-change', onStoreChange);
    };
  }, []);

  const value = useSyncExternalStore(subscribe, readValue, () => defaultValue);

  const setQueryValue = useCallback(
    (nextValue: Value) => {
      const url = new URL(window.location.href);
      if (nextValue === defaultValue) {
        url.searchParams.delete(key);
      } else {
        url.searchParams.set(key, nextValue);
      }

      window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);
      window.dispatchEvent(new Event('url-query-state-change'));
    },
    [defaultValue, key],
  );

  return [value, setQueryValue] as const;
}

type QueryListStateOptions<Value extends string> = {
  defaultValues: readonly Value[];
  key: string;
  values: readonly Value[];
};

export function useUrlQueryListState<Value extends string>({
  defaultValues,
  key,
  values,
}: QueryListStateOptions<Value>) {
  const defaultSnapshot = defaultValues.join(',');

  const readSnapshot = useCallback(() => {
    const selectedValues = new Set(new URLSearchParams(window.location.search).get(key)?.split(',') ?? defaultValues);
    return values.filter((value) => selectedValues.has(value)).join(',');
  }, [defaultValues, key, values]);

  const subscribe = useCallback((onStoreChange: () => void) => {
    window.addEventListener('popstate', onStoreChange);
    window.addEventListener('url-query-state-change', onStoreChange);
    return () => {
      window.removeEventListener('popstate', onStoreChange);
      window.removeEventListener('url-query-state-change', onStoreChange);
    };
  }, []);

  const snapshot = useSyncExternalStore(subscribe, readSnapshot, () => defaultSnapshot);
  const selectedValues = useMemo(() => new Set(snapshot.split(',').filter(Boolean) as Value[]), [snapshot]);

  const setValueEnabled = useCallback(
    (targetValue: Value, enabled: boolean) => {
      const nextValues = new Set(readSnapshot().split(',').filter(Boolean) as Value[]);

      if (enabled) {
        nextValues.add(targetValue);
      } else {
        nextValues.delete(targetValue);
      }

      const nextSnapshot = values.filter((value) => nextValues.has(value)).join(',');
      const url = new URL(window.location.href);

      if (nextSnapshot === defaultSnapshot) {
        url.searchParams.delete(key);
      } else {
        url.searchParams.set(key, nextSnapshot);
      }

      window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);
      window.dispatchEvent(new Event('url-query-state-change'));
    },
    [defaultSnapshot, key, readSnapshot, values],
  );

  return [selectedValues, setValueEnabled] as const;
}
