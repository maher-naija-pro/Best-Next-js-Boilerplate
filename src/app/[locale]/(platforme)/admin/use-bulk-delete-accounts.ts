import { client } from "@/lib/hono"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { InferRequestType, InferResponseType } from "hono"
import { toast } from "sonner"

//@ts-ignore
type ResponseType = InferResponseType<(typeof client.api.accounts)["bulk-delete"]["$post"]>
//@ts-ignore
type RequestType = InferRequestType<(typeof client.api.accounts)["bulk-delete"]["$post"]>["json"]

export const useBulkDeleteAccounts = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async json => {
      //@ts-ignore
      const response = await client.api.accounts["bulk-delete"]["$post"]({ json })
      return await response.json()
    },
    onSuccess: () => {
      toast.success("Accounts deleted")
      queryClient.invalidateQueries({ queryKey: ["accounts"] })
    },
    onError: () => {
      toast.error("Failed to delete accounts")
    },
  })

  return mutation
}
