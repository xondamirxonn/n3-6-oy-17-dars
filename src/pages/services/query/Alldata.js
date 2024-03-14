import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../config/request'

export const useGetAllData = (datakey) => {
  return useQuery({
    queryKey: ["phone",datakey],
    queryFn: () => request.get(`${datakey}`).then((res) => res.data)
  })
}
