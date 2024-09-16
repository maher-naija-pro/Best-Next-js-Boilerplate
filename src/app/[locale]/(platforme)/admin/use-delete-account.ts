import { client } from "@/lib/hono"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { InferRequestType, InferResponseType } from "hono"
import { toast } from "sonner"

//@ts-ignore
type ResponseType = InferResponseType<(typeof client.api.accounts)[":id"]["$delete"]>

export const useDeleteAccount = (id?: string) => {
  const queryClient = useQueryClient()
  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      //@ts-ignore
      const response = await client.api.accounts[":id"]["$delete"]({
        param: { id },
      })
      return await response.json()
    },
    onSuccess: () => {
      toast.success("Account deleted")
      queryClient.invalidateQueries({ queryKey: ["account", { id }] })
    },
    onError: () => {
      toast.error("Failed to delete account")
    },
  })

  return mutation
}
