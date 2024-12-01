
interface LightProps
{
    color: string,
    width?: string,
    height?: string,
    className?: string,
    blurRadius: number,
    children?: any
}

/**
 * Creates a subtle lighting effect
 */
const Light = (props: LightProps) => {
  return (
    <div className={`${props.className} absolute`} id="light" style={{
        backgroundColor: props.color,
        filter: `blur(${props.blurRadius}px)`,
    }}>
        {props.children}
    </div>
  );
};


export default Light;
