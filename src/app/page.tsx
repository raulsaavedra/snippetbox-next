import Snippet, { TSnippet } from "@/components/Snippet";

export default async function Home() {
  const response = await fetch("http://0.0.0.0:4000/");
  const snippets: TSnippet[] = await response.json();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-5">
        {snippets.map((snippet: TSnippet) => (
          <Snippet key={snippet.id} snippet={snippet} />
        ))}
      </div>
    </div>
  );
}
