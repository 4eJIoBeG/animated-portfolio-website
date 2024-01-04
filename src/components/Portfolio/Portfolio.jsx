import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Some title",
    img: "https://media.gettyimages.com/id/1774164211/photo/creating-a-comfortable-workspace.jpg?s=2048x2048&w=gi&k=20&c=YIuS8y2DqhAQlBy40OcOqj9thYnJ1G6qwZkzr3NwlUg=",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum itaque, recusandae officiis architecto doloribus odit minima pariatur incidunt hic.",
  },
  {
    id: 2,
    title: "Some title",
    img: "https://media.gettyimages.com/id/1602593688/photo/portals-and-avatars-in-the-metaverse.jpg?s=2048x2048&w=gi&k=20&c=b-GDrbWn7ur5n7bJCK5q4djBNJPaSqZNLcBmt9tZ-pk=",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum itaque, recusandae officiis architecto doloribus odit minima pariatur incidunt hic.",
  },
  {
    id: 3,
    title: "Some title",
    img: "https://media.gettyimages.com/id/1295485929/photo/red-cliff-colorado-winter-views.jpg?s=2048x2048&w=gi&k=20&c=An4ZTicdONE2mzNcWiY4kFmF4AFmechJqlUmeZTGmpM=",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum itaque, recusandae officiis architecto doloribus odit minima pariatur incidunt hic.",
  },
  {
    id: 4,
    title: "Some title",
    img: "https://media.gettyimages.com/id/605170507/photo/blooming-allium-in-black-and-white.jpg?s=2048x2048&w=gi&k=20&c=xsBnKTCxxIh6QDAZI12JgGw-aGfxU3I3yLOjd0nI3ms=",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum itaque, recusandae officiis architecto doloribus odit minima pariatur incidunt hic.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
