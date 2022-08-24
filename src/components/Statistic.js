/** @jsxImportSource @emotion/react */
function getRandomColor() {
  //funkcja z https://stackoverflow.com/questions/1484506/random-color-generator
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function Statistics(props) {
  const statistics = props.stats;
  const view = statistics.map(statistic => (
    <li className="stat__item" css={{backgroundColor: getRandomColor(), }} key={statistic.id}>
      <span className="stat__label">{statistic.label}</span>
      <span className="stat__percentage">{statistic.percentage}%</span>
    </li>
  ));
  
  if (!props.title) {
    return (
      <ul className="stat__list">{view}</ul>
    );
  }
  return (
    <section className="statistics">
      <h2 className="stat__title">Upload stats</h2>
      <ul className="stat__list">{view}</ul>
    </section>
  );

}
export default Statistics;