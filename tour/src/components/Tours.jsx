import './Tour';

export default function Tours({tours}) {
  return( 
    <section>
      <div className="title">
        <h2>Tours</h2>
        <div className="underline">

        </div>
      </div>
      <div>
        {tours.map((e) => {
          return <Tour />
        })}
      </div>
    </section>
  );
}
