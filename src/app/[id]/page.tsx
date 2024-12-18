import Snippet, { TSnippet } from "@/components/Snippet";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  let data: TSnippet | null = null;

  const response = await fetch(`http://0.0.0.0:4000/snippet/view/${id}`);

  if (response.status === 404) {
    return (
      <div className="max-w-3xl mx-auto">
        <p>Snippet not found</p>
      </div>
    );
  }

  if (!response.ok) {
    return (
      <div className="max-w-3xl mx-auto">
        <p>An error occurred</p>
      </div>
    );
  }

  data = await response.json();

  return (
    <div className="max-w-3xl mx-auto">
      {data ? <Snippet snippet={data} /> : null}
    </div>
  );
}
