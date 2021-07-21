const withTriangleMods = (Shape) => (props) =>
(
    <Shape
        {...props}
        name={props.name}
        getArea={getTriangleArea(props.base, props.height)}
    />
);

const getTriangleArea = (base, height) => {
    return 0.5 * base * height;
};

export default withTriangleMods;