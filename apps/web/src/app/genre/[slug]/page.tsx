export default function GenrePage({ params }: { params: { slug: string } }) {
    return <div>Genre: {params.slug}</div>;
}
