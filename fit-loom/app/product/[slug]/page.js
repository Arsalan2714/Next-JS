export default function Page({ params }) {
        const { slug } = params;
      return <div>The slug is: {slug}</div>;
    }