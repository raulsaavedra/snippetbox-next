"use client";

import Link from "next/link";

export type TSnippet = {
  id: string;
  title: string;
  content: string;
  created: string;
  expires: string;
};

export default function Snippet({ snippet }: { snippet: TSnippet }) {
  return (
    <div
      key={snippet.id}
      className="p-4 px-6 border border-green-500 rounded-lg cursor-pointer 
		 transition-all duration-300 hover:-translate-y-1.5 relative"
    >
      <Link
        href={`/${snippet.id}`}
        className="absolute inset-0 w-full h-full"
      />
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <h1 className="text-xl font-bold">{snippet.title}</h1>
          <p className="text-sm text-gray-400">#{snippet.id}</p>
        </div>
        <p>{snippet.content}</p>
        <div className="flex flex-row justify-between gap-2">
          <p className="text-sm text-gray-400">
            Created: {new Date(snippet.created).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-400">
            Expires: {new Date(snippet.expires).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
