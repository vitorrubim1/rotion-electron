import { ToC } from "@renderer/components/ToC";

export function DocumentPage() {
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </main>
    </main>
  );
}
