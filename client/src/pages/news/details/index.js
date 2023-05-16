export default function Index(props) {
  const { news } = props;
  return (
    <>
      <div className="py-[90px] bg-yellow-50">
        <div className="text-5xl px-40">
          <h1>{news.title}</h1>
          <img src={news.imageSrc} />
        </div>
        <h5>{news.category}</h5>
        <p>{news.description}</p>
      </div>
    </>
  );
}

export function getServerSideProps(ctx) {
  return {
    props: {
      news: {
        imageSrc: 'https://via.placeholder.com/400x230',
        category: 'Scholarship',
        title: 'Digital Marketing Masterclass',
        description:
          'Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science degree from the University of London. You’ll master in-demand computing skills, solve complex problems, and hone your innovation and creativity.',
        buttonLabel: 'Learn more',
        buttonUrl: '#',
      },
    },
  };
}
