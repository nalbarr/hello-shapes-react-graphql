import "./App.css";
import {
  ClassCounter,
  FunctionalCounter,
  FunctionalCounterWithRefs,
  // FunctionalCounterWithForwardRefs,
  Triangle,
  Square,
} from "./components";
import {
  Shape,
  withTriangleMods,
  withSquareMods,
  ShapeWithRefs,
  withSquareModsRefs,
}
  from "./componentsx";

// NAA.
// 1. ClassCounter is a React Class Component.
// 2. FunctionalCounter is a React Functional Component (RFC) (with basic useState hook)
// 3. FunctionalCounterWithRefs (with both useState and useRef hooks)
// 4. Triangle, Square are RFC that violate DRY principles and have duplicated implementation.
// 5. Shape, withTriangleMods, withSquareModes show Higher Order Component (HOC) to address #4.
// 6. HOC with forward refs.
function App() {
  const Triangle2 = withTriangleMods(Shape);
  const Square2 = withSquareMods(Shape);
  const Square3 = withSquareModsRefs(ShapeWithRefs);

  const element = document.getElementById("square2")
  if (element !== null) {
    element.style.display = "square2-changed"
  } else {
    console.log("element is", element)
  }
  // TODO: NA, NLA.
  // - forwardRefs?

  return (
    <div>
      <p id="paragraph1">
        I am a paragraph element.
      </p>
      <ClassCounter />
      <hr />
      <FunctionalCounter />
      <hr />
      <FunctionalCounterWithRefs />
      <hr />
      <Triangle name="triangle" base="2" height="2" />
      <hr />
      <Square name="square" side="2" />
      <hr />
      <Triangle2 name="triangle 2" base="2" height="2" />
      <hr />
      <Square2 name="square 2" side="2" />
      <hr />
      <Square2 name="square 2" side="2" id="square3" />
      <hr />
      <Square3 displayName="square3" name="square 3" side="2" />
      <hr />
    </div>
  );
}

export default App;
