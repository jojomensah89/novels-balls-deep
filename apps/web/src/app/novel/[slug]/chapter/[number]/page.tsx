import { ChapterNav } from "@/components/chapter/chapter-nav";
import { ReaderSettings } from "@/components/reading/reader-settings";
import { chapters } from "@/lib/api";
import { notFound } from "next/navigation";

interface ChapterPageProps {
    params: {
        slug: string;
        number: string;
    };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
    // In a real app, we'd fetch the chapter by novel slug and chapter number
    // For now, we'll use a placeholder
    const chapterNumber = parseInt(params.number);

    if (isNaN(chapterNumber)) {
        notFound();
    }

    // Mock data - replace with actual API call
    const chapter = {
        id: "1",
        chapterNumber,
        title: "The Beginning",
        content: `
      <p>This is the first paragraph of the chapter. It introduces the main character and sets the scene for the story that's about to unfold.</p>
      
      <p>The second paragraph continues the narrative, building upon the foundation laid in the first paragraph. It adds more details about the setting and the character's current situation.</p>
      
      <p>As we move into the third paragraph, the plot begins to thicken. New elements are introduced that will become important later in the story.</p>
      
      <p>The fourth paragraph might introduce dialogue or action, moving the story forward at a faster pace. This helps maintain reader engagement and interest.</p>
      
      <p>Finally, the last paragraph of this section wraps up the current scene while hinting at what's to come, creating anticipation for the next chapter.</p>
    `,
    };

    const totalChapters = 245; // Mock total

    return (
        <div className="min-h-screen">
            {/* Chapter Navigation */}
            <ChapterNav
                novelSlug={params.slug}
                currentChapter={chapterNumber}
                totalChapters={totalChapters}
                chapterTitle={chapter.title}
            />

            {/* Chapter Content */}
            <main className="max-w-4xl mx-auto px-4 py-12">
                <article className="chapter-content prose prose-slate dark:prose-invert max-w-none">
                    <h1 className="text-3xl font-bold mb-8">
                        Chapter {chapterNumber}: {chapter.title}
                    </h1>
                    <div dangerouslySetInnerHTML={{ __html: chapter.content }} />
                </article>

                {/* Bottom Navigation */}
                <div className="mt-16 pt-8 border-t">
                    <div className="flex items-center justify-between">
                        <div>
                            {chapterNumber > 1 && (
                                <a
                                    href={`/novel/${params.slug}/chapter/${chapterNumber - 1}`}
                                    className="text-primary hover:underline"
                                >
                                    ← Previous Chapter
                                </a>
                            )}
                        </div>
                        <div>
                            {chapterNumber < totalChapters && (
                                <a
                                    href={`/novel/${params.slug}/chapter/${chapterNumber + 1}`}
                                    className="text-primary hover:underline"
                                >
                                    Next Chapter →
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            {/* Reader Settings */}
            <ReaderSettings />
        </div>
    );
}
