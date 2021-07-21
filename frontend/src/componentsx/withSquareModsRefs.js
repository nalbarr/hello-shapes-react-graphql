const withSquareModsRefs = (ShapeWithRefs) => (props) => (
    <ShapeWithRefs {...props} name={props.name} getArea={getSquareArea(props.side)} />
);

const getSquareArea = (side) => {
    return side * side;
};

export default withSquareModsRefs;
