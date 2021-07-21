const withSquareMods = (Shape) => (props) => (
    <Shape {...props} name={props.name} getArea={getSquareArea(props.side)} />
);

const getSquareArea = (side) => {
    return side * side;
};

export default withSquareMods;
