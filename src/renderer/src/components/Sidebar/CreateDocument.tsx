import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus } from "phosphor-react";
import { FetchAllDocumentsResponse } from "@shared/types/ipc";

export function CreateDocument() {
  const queryClient = useQueryClient();

  const { mutateAsync: createDocument, isPending: isCreatingNewDocument } =
    useMutation({
      mutationFn: () => window.api.createDocument(),
      onSuccess: (data) => {
        queryClient.setQueryData<FetchAllDocumentsResponse>(
          ["documents"],
          (oldData) => {
            const hasDocuments = oldData && oldData?.data?.length > 0;
            if (hasDocuments) return { data: [...oldData.data, data.data] };

            return { data: [data.data] };
          }
        );
      },
    });

  return (
    <button
      disabled={isCreatingNewDocument}
      className="flex w-[240px] px-5 items-center text-sm gap-2 absolute bottom-0 left-0 right-0 py-4 border-t border-rotion-600 hover:bg-rotion-700 disabled:opacity-60"
      onClick={() => createDocument()}
    >
      <Plus className="h-4 w-4" />
      Criar novo documento
    </button>
  );
}
