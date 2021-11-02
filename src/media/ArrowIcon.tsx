const ArrowIcon = ({ dir, color }) => {
  const ArrowUp = (
    <>
      <g>
        <g>
          <path
            d="M381.022,45.405c-57.921,57.922-115.843,115.843-173.765,173.765c-11.558,11.558-11.558,30.869,0,42.427
      c11.558,11.558,30.869,11.558,42.427,0c3.19-3.19,6.38-6.38,9.57-9.57c11.558-11.558,11.558-30.869,0-42.427
      c-11.558-11.558-30.869-11.558-42.427,0c-3.19,3.19-6.38,6.38-9.57,9.57c-11.558,11.558-11.558,30.869,0,42.427
      c11.558,11.558,30.869,11.558,42.427,0c57.921-57.922,115.843-115.843,173.764-173.765c11.559-11.558,11.559-30.869,0-42.427
      C411.891,33.847,392.58,33.847,381.022,45.405L381.022,45.405z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M381.022,87.832c59.157,59.156,118.313,118.313,177.47,177.47c11.558,11.558,30.868,11.558,42.426,0
      c11.559-11.559,11.558-30.868,0-42.427c-3.258-3.258-6.516-6.516-9.773-9.773c-11.558-11.558-30.868-11.558-42.426,0
      c-11.559,11.558-11.559,30.869,0,42.427c3.258,3.258,6.516,6.515,9.773,9.773c14.142-14.142,28.284-28.285,42.426-42.427
      c-59.156-59.156-118.313-118.313-177.47-177.47c-11.558-11.558-30.868-11.558-42.426,0
      C369.464,56.963,369.464,76.273,381.022,87.832L381.022,87.832z"
          />
        </g>
      </g>
      <circle cx="402.235" cy="252.059" r="78.275" />
      <circle cx="402.235" cy="381.059" r="37.217" />
      <circle cx="402.235" cy="455.059" r="18.94" />
    </>
  );
  const ArrowDown = (
    <>
      <g>
        <g>
          <path
            d="M427.153,495.212c57.922-57.921,115.844-115.843,173.765-173.765c11.559-11.558,11.559-30.868,0-42.426
          c-11.558-11.558-30.868-11.558-42.426,0c-3.19,3.19-6.381,6.38-9.57,9.57c-11.559,11.558-11.559,30.869,0,42.426
          c11.558,11.559,30.868,11.559,42.426,0c3.19-3.189,6.381-6.38,9.57-9.57c-14.142-14.142-28.284-28.284-42.426-42.426
          c-57.922,57.921-115.844,115.843-173.765,173.765c-11.558,11.558-11.558,30.868,0,42.426
          C396.285,506.771,415.596,506.771,427.153,495.212L427.153,495.212z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M427.153,452.786c-59.156-59.157-118.313-118.313-177.469-177.47c-14.142,14.142-28.285,28.285-42.427,42.426
          c3.258,3.258,6.516,6.516,9.774,9.773c11.559,11.558,30.868,11.559,42.427,0c11.557-11.558,11.559-30.869,0-42.426
          c-3.258-3.257-6.516-6.515-9.774-9.773c-11.558-11.558-30.869-11.558-42.427,0c-11.558,11.558-11.558,30.869,0,42.426
          c59.157,59.157,118.313,118.313,177.47,177.47c11.558,11.559,30.869,11.559,42.426,0
          C438.712,483.654,438.712,464.344,427.153,452.786L427.153,452.786z"
          />
        </g>
      </g>
      <circle cx="405.94" cy="288.559" r="78.275" />
      <circle cx="405.94" cy="159.559" r="37.217" />
      <circle cx="405.94" cy="85.559" r="18.94" />
    </>
  );
  const SetArrow = (direction: string) => {
    switch (direction) {
      case "up":
        return ArrowUp;
      case "down":
        return ArrowDown;
      default:
        break;
    }
  };

  return (
    <>
      <svg
        x="0px"
        y="0px"
        width="792px"
        height="612px"
        viewBox="0 0 800 550"
        fill={color}
      >
        {SetArrow(dir)}
      </svg>
    </>
  );
};

export default ArrowIcon;