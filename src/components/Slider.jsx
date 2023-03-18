import { styled, alpha } from '@mui/system';
import SliderUnstyled, { sliderUnstyledClasses } from '@mui/base/SliderUnstyled';
import sliderIcon from '../assets/images/icon-slider.svg'

const green = {
  'main': 'hsl(174, 77%, 80%)', 
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledSlider = styled(SliderUnstyled)(
  ({ theme }) => `
  color: ${green.main};
  height: 1rem;
  width: 100%;
  padding: 1rem 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    opacity: 1;
  }

  &.${sliderUnstyledClasses.disabled} { 
    pointer-events: none;
    cursor: default;
    color: ${theme.palette.mode === 'light' ? grey[300] : grey[600]};
    opacity: 0.5;
  }

  & .${sliderUnstyledClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 0.5rem;
    border-radius: 0.5rem;
    background-color: currentColor;
    opacity: 0.4;
  }

  & .${sliderUnstyledClasses.track} {
    display: block;
    position: absolute;
    height: 0.5rem;
    border-radius: 0.5rem;
    background-color: currentColor;
  }

  & .${sliderUnstyledClasses.thumb} {
    position: absolute;
    width: 3rem;
    height: 3rem;
    margin-left: -1.5rem;
    margin-top: -1.3rem;
    box-sizing: border-box;
    border-radius: 50%;
    box-shadow: 0.5rem 1rem 2rem 5px hsl(174, 70%, 80%);
    outline: 0;
    background-color: hsl(174, 86%, 45%);
    background-image: url( ${sliderIcon} );
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1.5rem;

    :hover,
    &.${sliderUnstyledClasses.focusVisible} {
      box-shadow: 0 0 0 0.25rem ${alpha(
        green.main,
        0.15,
      )};
    }

    &.${sliderUnstyledClasses.active} {
      box-shadow: 0 0 0 0.25rem ${alpha(
        green.main,
        0.3,
      )};
    }
  }
`,
);

export default function Styledslider({ min, max, data, setValue }) {
  return (
    <>
    <StyledSlider defaultValue={16} min={min} max={max} onChange={(e)=>{
      setValue({
        ...data,
        price: e.target.value,
      }
      );
    }}/>
    <StyledSlider defaultValue={10}/>
    </>
  );
}
