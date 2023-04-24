import useSWR from 'swr'

export default function useFetcher<T>(path: string) {
  const { data } = useSWR<T>(path, () => fetch(path).then(res => res.json()))

  return data as T
}
