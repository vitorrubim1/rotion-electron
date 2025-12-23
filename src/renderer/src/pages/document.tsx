import { ToC, Editor } from "@renderer/components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export function DocumentPage() {
  const { id } = useParams<{ id: string }>();

  const { data, isFetching } = useQuery({
    queryKey: ["document", id],
    queryFn: () => {
      if (!id) throw new Error("Document id is required");

      return window.api.fetchDocument({ id });
    },
  });

  const initialContent = useMemo(() => {
    const finalData = data?.data;

    if (finalData) {
      return `<h1>${finalData.title}</h1>${finalData.content || "<p></p>"}`;
    }

    return "";
  }, [data]);

  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      <aside className="hidden lg:block sticky top-0">
        <span className="text-rotion-300 font-semibold uppercase text-xs">
          Table of contents
        </span>

        <ToC.Root>
          <ToC.Link>Backend</ToC.Link>
          <ToC.Section>
            <ToC.Link>Introduction</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <main className="flex-1 flex flex-col items-center">
        {!isFetching && data && <Editor content={initialContent} />}
      </main>
    </main>
  );
}
