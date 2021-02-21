import styled from 'styled-components';
import { motion } from 'framer-motion'
import Header from '../src/components/Header';
import Link from '../src/components/Link';

const WordsContainer = styled.main`
	width: 96.62vw;
	margin: 74px 5px 5px 5px;
	padding-bottom: 10px;
	display: flex;
	flex-direction: column;
	.word {
		width:100%;
		min-height: 129px;
    margin-top: 10px;
		padding: 15px  20px  20px  20px;
    font-size: 2.25rem;
		line-height: 2.25rem;
    font-family: Playfair Display;
    transition: box-shadow  200ms;
		
    border-radius: ${({ theme }) => theme.border.radius};
		
    background-color: ${({ theme }) => theme.colors.primary};
		
    color: ${({ theme }) => theme.font.colorPrimary};
    
		box-shadow: ${({ theme }) => theme.boxShadow};
	}
  .word:hover {
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.25);
  }
	.word h2, 
	.word p {
		margin-bottom: 20px;
		font-weight: normal;
		line-height: 35px;
	}
	.word h2 {
		color: ${({ theme }) => theme.font.colorSecudary};
	}
	.word .word-options {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-top: auto;
	}
	.word .edit,
	.word .share {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 30px;
		width: 30px;
		margin-right: 15px;
		transition: background-color  200ms;
		
    border-radius: ${({ theme }) => theme.border.radius};
	}
	.word button {
		background-color: transparent;
		border: none;
	}
	.word-options svg {
		height: 25px;
		width: 25px;

		fill: ${({ theme }) => theme.svg.secundaryFill};   
	}
	.no-result-message { 
		align-self: center;
		display: flex;
		justify-content: center;
		align-items: center;
		width: auto;
		padding: 20px;
		
    border-radius: ${({ theme }) => theme.border.radius};
		
    background-color: ${({ theme }) => theme.colors.primary};;
		
    box-shadow: ${({ theme }) => theme.boxShadow};
	}
	.no-result-message p { 
		margin: 0;
		font-size: 1.7rem;
		font-family: sans-serif;
	}
	.no-result-message p em{
		color: #219653; 

		font-family: ${({ theme }) => theme.font.primary};;
	}

	/* Dark-mode */
	.dark-mode .word button {
		background-color: #575b5c;
	}
	.dark-mode .word-options svg  {
		
	}

	/* Desktop version */
	@media (min-width: 642px) {
		width: 95vw;
		display: flex;
		flex-flow: row wrap;
		align-content: flex-start;
		justify-content: center;
		.word {
			width: auto; 
			min-width: 235px;
			min-height: 130px;
			margin: 5px 5px 5px 5px;
			padding: 15px  15px  10px  20px;
			line-height: 16px;
			font-size: 1.5rem;
		}
		.word h2 {
			font-size: 3rem ;
		} 
		.word p {
			margin-bottom: 10px;
			font-weight: normal;
			line-height: 20px;
			font-weight: 500;
		}
		.word-options{
			justify-self: end;
		}
		.word-options svg {
			height: 20px;
			width: 20px;
		}
		.word .edit,
		.word .share {
			height: 25px;
			width: 25px;
			margin-right: 5px;

			border-radius: ${({ theme }) => theme.border.radius};
		}
		.word .edit:hover,
		.word .share:hover {  
			background-color: ${({ theme }) => theme.colors.secundaryHover};
		}
    @media (min-width: 1025px) {
      width: 50vw;
      max-width: 750px;
    }
		
}
`
const screenStates = {
  LOADING: 'LOADING',
  SEARCH_RESULT: 'SEARCH_RESULT',
  SEARCH_NO_RESULT: 'SEARCH_NO_RESULT',
};

export default function Home() {
  const [screenState, setScreenState] = React.useState(screenStates.SEARCH_RESULT)
  return (
    <>
      <Header />
      <WordsContainer>
        {screenState === screenStates.SEARCH_RESULT && (
          <>
            <motion.section
              whileHover={{ y: '-1%' }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [.5, 1],
              }}
              transition={{
                duration: .2
              }}
              className="word"
            >
              <h2><em>Lorem Ipsum</em></h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, metus gravida pretium aliquam, sem quam accumsan metus, a posuere urna enim viverra nibh. Integer quis metus varius, egestas mauris a, viverra eros. 
            </p>

              <div className="word-options">
                <div className="share" alt="Compartilhar" title="Compartilhar">
                  <motion.svg
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    viewBox="0 0 227.216 227.216"
                  >
                    <path d="M175.897,141.476c-13.249,0-25.11,6.044-32.98,15.518l-51.194-29.066c1.592-4.48,2.467-9.297,2.467-14.317
										c0-5.019-0.875-9.836-2.467-14.316l51.19-29.073c7.869,9.477,19.732,15.523,32.982,15.523c23.634,0,42.862-19.235,42.862-42.879
										C218.759,19.229,199.531,0,175.897,0C152.26,0,133.03,19.229,133.03,42.865c0,5.02,0.874,9.838,2.467,14.319L84.304,86.258
										c-7.869-9.472-19.729-15.514-32.975-15.514c-23.64,0-42.873,19.229-42.873,42.866c0,23.636,19.233,42.865,42.873,42.865
										c13.246,0,25.105-6.042,32.974-15.513l51.194,29.067c-1.593,4.481-2.468,9.3-2.468,14.321c0,23.636,19.23,42.865,42.867,42.865
										c23.634,0,42.862-19.23,42.862-42.865C218.759,160.71,199.531,141.476,175.897,141.476z M175.897,15
										c15.363,0,27.862,12.5,27.862,27.865c0,15.373-12.499,27.879-27.862,27.879c-15.366,0-27.867-12.506-27.867-27.879
										C148.03,27.5,160.531,15,175.897,15z M51.33,141.476c-15.369,0-27.873-12.501-27.873-27.865c0-15.366,12.504-27.866,27.873-27.866
										c15.363,0,27.861,12.5,27.861,27.866C79.191,128.975,66.692,141.476,51.33,141.476z M175.897,212.216
										c-15.366,0-27.867-12.501-27.867-27.865c0-15.37,12.501-27.875,27.867-27.875c15.363,0,27.862,12.505,27.862,27.875
										C203.759,199.715,191.26,212.216,175.897,212.216z"/>
                  </motion.svg >
                </div>
                <Link className="edit" href={`/editWord`} title="Editar" alt="Editar">
                  <motion.svg
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    viewBox="0 0 250.00    240.483"
                  >
                    <path className="fil0" d="M32.465 213.6c-2.958,1.784 -9.63,8.149 -15.415,13.038 -5.785,4.89 -10.684,8.304 -13.579,10.42 -2.895,2.115 -3.785,2.932 -3.377,3.377 0.408,0.445 5.064,-2.375 8.1,-2.604 3.036,-0.229 8.089,0.81 10.65,0.625 2.561,-0.185 3.884,-1.376 4.588,-1.986 0.704,-0.61 5.2,-4.422 9.283,-7.725 4.083,-3.303 7.571,-5.975 10.554,-8.035 2.003,-1.383 3.778,-2.489 4.347,-3.168 1.354,-0.047 2.716,-0.082 4.076,-0.13 4.799,-0.17 9.567,-0.51 15.589,-0.901 6.022,-0.392 13.296,-0.836 20.384,-2.097 7.089,-1.261 13.992,-3.339 19.683,-6.271 5.692,-2.932 10.173,-6.719 13.346,-9.864 3.173,-3.146 5.039,-5.651 5.485,-7.024 0.445,-1.373 -0.53,-1.614 -1.94,-1.858 -1.41,-0.244 -3.254,-0.49 -3.767,-0.793 -0.512,-0.303 0.306,-0.662 1.665,-1.434 1.36,-0.773 3.26,-1.958 5.728,-2.734 2.469,-0.776 5.507,-1.142 7.673,-1.304 2.167,-0.163 3.462,-0.121 5.997,-1.455 2.534,-1.334 6.308,-4.042 14.008,-9.813 7.7,-5.771 19.327,-14.603 28.824,-22.415 9.496,-7.812 16.862,-14.603 21.517,-19.253 4.654,-4.651 6.597,-7.159 7.63,-8.613 1.034,-1.455 1.159,-1.855 1.292,-2.233 0.132,-0.379 0.274,-0.735 -0.983,-1.071 -1.256,-0.337 -3.91,-0.651 -6.467,-0.554 -2.557,0.097 -5.015,0.606 -8.578,1.515 -3.562,0.909 -8.228,2.218 -10.431,2.575 -2.203,0.357 -1.943,-0.236 0.025,-2.122 1.969,-1.886 5.647,-5.064 10.744,-8.002 5.097,-2.939 11.613,-5.638 16.551,-7.083 4.938,-1.446 8.298,-1.636 10.4,-1.314 2.103,0.322 2.949,1.157 6.098,-3.173 3.149,-4.33 8.603,-13.825 12.039,-21.516 3.437,-7.692 4.858,-13.58 5.447,-19.2 0.589,-5.62 0.347,-10.972 -0.096,-15.696 -0.442,-4.724 -1.083,-8.82 -2.372,-12.898 -1.289,-4.078 -3.226,-8.139 -5.489,-11.679 -2.263,-3.54 -4.853,-6.558 -7.6,-9.082 -2.746,-2.524 -5.648,-4.552 -7.099,-5.418 -0.217,-0.129 -0.403,-0.233 -0.568,-0.296 0.036,-0.006 0.074,-0.008 0.113,-0.007 -3.306,-1.709 -6.919,-2.942 -10.164,-3.622 -4.601,-0.965 -8.461,-0.817 -12.023,-0.297 -3.563,0.519 -6.829,1.41 -12.099,3.414 -5.27,2.004 -12.544,5.121 -16.552,7.274 -4.008,2.152 -4.75,3.34 -7.719,10.391 -2.969,7.051 -8.165,19.966 -10.763,26.275 -2.597,6.309 -2.597,6.012 -2.431,0.413 0.166,-5.6 0.498,-16.501 0.365,-21.363 -0.132,-4.862 -0.73,-3.684 -5.052,-0.015 -4.323,3.67 -12.37,9.831 -21.572,17.917 -9.202,8.086 -19.559,18.096 -28.188,27.685 -8.629,9.588 -15.533,18.755 -19.615,24.489 -4.082,5.734 -5.344,8.034 -6.383,12.228 -1.039,4.193 -1.856,10.28 -2.009,16.031 -0.154,5.751 0.355,11.167 0.077,13.801 -0.278,2.635 -1.344,2.49 -3.492,-0.236 -2.147,-2.727 -5.376,-8.034 -7.973,-9.161 -2.596,-1.127 -4.561,1.926 -7.251,5.902 -2.689,3.975 -6.103,8.874 -8.627,14.96 -2.524,6.087 -4.157,13.36 -5.344,21.08 -1.188,7.719 -1.93,15.883 -2.969,23.9 -1.039,8.016 -2.375,15.884 -3.034,19.966 -0.182,1.125 -0.311,1.962 -0.4,2.586 -0.245,0.224 -0.459,0.424 -0.641,0.603l0.072 -0.119c0.081,-0.652 0.233,-1.649 0.479,-3.174l0.355 -2.177c-0.294,0.076 -0.663,0.243 -1.122,0.52zm14.829 3.953l-0.119 0.005 -1.481 0.062 -0.059 0.003c0.551,-0.027 1.105,-0.049 1.659,-0.07zm-12.69 -0.722c5.216,-4.413 18.231,-14.268 37.479,-28.841 20.195,-15.291 47.251,-35.775 71.716,-61.353 24.464,-25.578 46.336,-56.248 59.528,-77.476 11.75,-18.907 16.614,-30.324 19.131,-36.863 -2.504,6.493 -7.241,17.481 -17.815,32.483 -11.875,16.849 -31.114,38.76 -46.227,55.579 -15.112,16.82 -26.097,28.547 -40.942,43.169 -14.844,14.622 -33.548,32.139 -49.567,45.945 -15.267,13.159 -28.095,22.947 -33.303,27.357zm191.305 -212.516c0.026,-0.011 0.05,-0.019 0.077,-0.026 -0.026,0.006 -0.051,0.015 -0.077,0.026z" />
                  </motion.svg >
                </Link >
              </div>
            </motion.section>
            <motion.section
              whileHover={{ y: '-1%' }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [.5, 1],
              }}
              transition={{
                duration: .2
              }}
              className="word"
            >
              <h2><em>Lorem Ipsum</em></h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, metus gravida pretium aliquam, sem quam accumsan metus, a posuere urna enim viverra nibh. Integer quis metus varius, egestas mauris a, viverra eros. Phasellus et sem sit amet tortor faucibus tempus vel vitae sem.
            </p>

              <div className="word-options">
                <div className="share" alt="Compartilhar" title="Compartilhar" >
                  <motion.svg
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    viewBox="0 0 227.216 227.216"
                  >
                    <path d="M175.897,141.476c-13.249,0-25.11,6.044-32.98,15.518l-51.194-29.066c1.592-4.48,2.467-9.297,2.467-14.317
										c0-5.019-0.875-9.836-2.467-14.316l51.19-29.073c7.869,9.477,19.732,15.523,32.982,15.523c23.634,0,42.862-19.235,42.862-42.879
										C218.759,19.229,199.531,0,175.897,0C152.26,0,133.03,19.229,133.03,42.865c0,5.02,0.874,9.838,2.467,14.319L84.304,86.258
										c-7.869-9.472-19.729-15.514-32.975-15.514c-23.64,0-42.873,19.229-42.873,42.866c0,23.636,19.233,42.865,42.873,42.865
										c13.246,0,25.105-6.042,32.974-15.513l51.194,29.067c-1.593,4.481-2.468,9.3-2.468,14.321c0,23.636,19.23,42.865,42.867,42.865
										c23.634,0,42.862-19.23,42.862-42.865C218.759,160.71,199.531,141.476,175.897,141.476z M175.897,15
										c15.363,0,27.862,12.5,27.862,27.865c0,15.373-12.499,27.879-27.862,27.879c-15.366,0-27.867-12.506-27.867-27.879
										C148.03,27.5,160.531,15,175.897,15z M51.33,141.476c-15.369,0-27.873-12.501-27.873-27.865c0-15.366,12.504-27.866,27.873-27.866
										c15.363,0,27.861,12.5,27.861,27.866C79.191,128.975,66.692,141.476,51.33,141.476z M175.897,212.216
										c-15.366,0-27.867-12.501-27.867-27.865c0-15.37,12.501-27.875,27.867-27.875c15.363,0,27.862,12.505,27.862,27.875
										C203.759,199.715,191.26,212.216,175.897,212.216z"/>
                  </motion.svg >
                </div>
                <Link className="edit" href={`/editWord`} title="Editar" alt="Editar">
                  <motion.svg
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    viewBox="0 0 250.00    240.483"
                  >
                    <path className="fil0" d="M32.465 213.6c-2.958,1.784 -9.63,8.149 -15.415,13.038 -5.785,4.89 -10.684,8.304 -13.579,10.42 -2.895,2.115 -3.785,2.932 -3.377,3.377 0.408,0.445 5.064,-2.375 8.1,-2.604 3.036,-0.229 8.089,0.81 10.65,0.625 2.561,-0.185 3.884,-1.376 4.588,-1.986 0.704,-0.61 5.2,-4.422 9.283,-7.725 4.083,-3.303 7.571,-5.975 10.554,-8.035 2.003,-1.383 3.778,-2.489 4.347,-3.168 1.354,-0.047 2.716,-0.082 4.076,-0.13 4.799,-0.17 9.567,-0.51 15.589,-0.901 6.022,-0.392 13.296,-0.836 20.384,-2.097 7.089,-1.261 13.992,-3.339 19.683,-6.271 5.692,-2.932 10.173,-6.719 13.346,-9.864 3.173,-3.146 5.039,-5.651 5.485,-7.024 0.445,-1.373 -0.53,-1.614 -1.94,-1.858 -1.41,-0.244 -3.254,-0.49 -3.767,-0.793 -0.512,-0.303 0.306,-0.662 1.665,-1.434 1.36,-0.773 3.26,-1.958 5.728,-2.734 2.469,-0.776 5.507,-1.142 7.673,-1.304 2.167,-0.163 3.462,-0.121 5.997,-1.455 2.534,-1.334 6.308,-4.042 14.008,-9.813 7.7,-5.771 19.327,-14.603 28.824,-22.415 9.496,-7.812 16.862,-14.603 21.517,-19.253 4.654,-4.651 6.597,-7.159 7.63,-8.613 1.034,-1.455 1.159,-1.855 1.292,-2.233 0.132,-0.379 0.274,-0.735 -0.983,-1.071 -1.256,-0.337 -3.91,-0.651 -6.467,-0.554 -2.557,0.097 -5.015,0.606 -8.578,1.515 -3.562,0.909 -8.228,2.218 -10.431,2.575 -2.203,0.357 -1.943,-0.236 0.025,-2.122 1.969,-1.886 5.647,-5.064 10.744,-8.002 5.097,-2.939 11.613,-5.638 16.551,-7.083 4.938,-1.446 8.298,-1.636 10.4,-1.314 2.103,0.322 2.949,1.157 6.098,-3.173 3.149,-4.33 8.603,-13.825 12.039,-21.516 3.437,-7.692 4.858,-13.58 5.447,-19.2 0.589,-5.62 0.347,-10.972 -0.096,-15.696 -0.442,-4.724 -1.083,-8.82 -2.372,-12.898 -1.289,-4.078 -3.226,-8.139 -5.489,-11.679 -2.263,-3.54 -4.853,-6.558 -7.6,-9.082 -2.746,-2.524 -5.648,-4.552 -7.099,-5.418 -0.217,-0.129 -0.403,-0.233 -0.568,-0.296 0.036,-0.006 0.074,-0.008 0.113,-0.007 -3.306,-1.709 -6.919,-2.942 -10.164,-3.622 -4.601,-0.965 -8.461,-0.817 -12.023,-0.297 -3.563,0.519 -6.829,1.41 -12.099,3.414 -5.27,2.004 -12.544,5.121 -16.552,7.274 -4.008,2.152 -4.75,3.34 -7.719,10.391 -2.969,7.051 -8.165,19.966 -10.763,26.275 -2.597,6.309 -2.597,6.012 -2.431,0.413 0.166,-5.6 0.498,-16.501 0.365,-21.363 -0.132,-4.862 -0.73,-3.684 -5.052,-0.015 -4.323,3.67 -12.37,9.831 -21.572,17.917 -9.202,8.086 -19.559,18.096 -28.188,27.685 -8.629,9.588 -15.533,18.755 -19.615,24.489 -4.082,5.734 -5.344,8.034 -6.383,12.228 -1.039,4.193 -1.856,10.28 -2.009,16.031 -0.154,5.751 0.355,11.167 0.077,13.801 -0.278,2.635 -1.344,2.49 -3.492,-0.236 -2.147,-2.727 -5.376,-8.034 -7.973,-9.161 -2.596,-1.127 -4.561,1.926 -7.251,5.902 -2.689,3.975 -6.103,8.874 -8.627,14.96 -2.524,6.087 -4.157,13.36 -5.344,21.08 -1.188,7.719 -1.93,15.883 -2.969,23.9 -1.039,8.016 -2.375,15.884 -3.034,19.966 -0.182,1.125 -0.311,1.962 -0.4,2.586 -0.245,0.224 -0.459,0.424 -0.641,0.603l0.072 -0.119c0.081,-0.652 0.233,-1.649 0.479,-3.174l0.355 -2.177c-0.294,0.076 -0.663,0.243 -1.122,0.52zm14.829 3.953l-0.119 0.005 -1.481 0.062 -0.059 0.003c0.551,-0.027 1.105,-0.049 1.659,-0.07zm-12.69 -0.722c5.216,-4.413 18.231,-14.268 37.479,-28.841 20.195,-15.291 47.251,-35.775 71.716,-61.353 24.464,-25.578 46.336,-56.248 59.528,-77.476 11.75,-18.907 16.614,-30.324 19.131,-36.863 -2.504,6.493 -7.241,17.481 -17.815,32.483 -11.875,16.849 -31.114,38.76 -46.227,55.579 -15.112,16.82 -26.097,28.547 -40.942,43.169 -14.844,14.622 -33.548,32.139 -49.567,45.945 -15.267,13.159 -28.095,22.947 -33.303,27.357zm191.305 -212.516c0.026,-0.011 0.05,-0.019 0.077,-0.026 -0.026,0.006 -0.051,0.015 -0.077,0.026z" />
                  </motion.svg >
                </Link >
              </div>
            </motion.section>
            <motion.section
              whileHover={{ y: '-1%' }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [.5, 1],
              }}
              transition={{
                duration: .2
              }}
              className="word"
            >
              <h2><em>Lorem Ipsum</em></h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, metus gravida pretium aliquam, sem quam accumsan metus, a posuere urna enim viverra nibh.
            </p>

              <div className="word-options">
                <div className="share" alt="Compartilhar" title="Compartilhar" >
                  <motion.svg
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    viewBox="0 0 227.216 227.216"
                  >
                    <path d="M175.897,141.476c-13.249,0-25.11,6.044-32.98,15.518l-51.194-29.066c1.592-4.48,2.467-9.297,2.467-14.317
										c0-5.019-0.875-9.836-2.467-14.316l51.19-29.073c7.869,9.477,19.732,15.523,32.982,15.523c23.634,0,42.862-19.235,42.862-42.879
										C218.759,19.229,199.531,0,175.897,0C152.26,0,133.03,19.229,133.03,42.865c0,5.02,0.874,9.838,2.467,14.319L84.304,86.258
										c-7.869-9.472-19.729-15.514-32.975-15.514c-23.64,0-42.873,19.229-42.873,42.866c0,23.636,19.233,42.865,42.873,42.865
										c13.246,0,25.105-6.042,32.974-15.513l51.194,29.067c-1.593,4.481-2.468,9.3-2.468,14.321c0,23.636,19.23,42.865,42.867,42.865
										c23.634,0,42.862-19.23,42.862-42.865C218.759,160.71,199.531,141.476,175.897,141.476z M175.897,15
										c15.363,0,27.862,12.5,27.862,27.865c0,15.373-12.499,27.879-27.862,27.879c-15.366,0-27.867-12.506-27.867-27.879
										C148.03,27.5,160.531,15,175.897,15z M51.33,141.476c-15.369,0-27.873-12.501-27.873-27.865c0-15.366,12.504-27.866,27.873-27.866
										c15.363,0,27.861,12.5,27.861,27.866C79.191,128.975,66.692,141.476,51.33,141.476z M175.897,212.216
										c-15.366,0-27.867-12.501-27.867-27.865c0-15.37,12.501-27.875,27.867-27.875c15.363,0,27.862,12.505,27.862,27.875
										C203.759,199.715,191.26,212.216,175.897,212.216z"/>
                  </motion.svg >
                </div>
                <Link className="edit" href={`/editWord`} title="Editar" alt="Editar" >
                  <motion.svg
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    viewBox="0 0 250.00    240.483"
                  >
                    <path className="fil0" d="M32.465 213.6c-2.958,1.784 -9.63,8.149 -15.415,13.038 -5.785,4.89 -10.684,8.304 -13.579,10.42 -2.895,2.115 -3.785,2.932 -3.377,3.377 0.408,0.445 5.064,-2.375 8.1,-2.604 3.036,-0.229 8.089,0.81 10.65,0.625 2.561,-0.185 3.884,-1.376 4.588,-1.986 0.704,-0.61 5.2,-4.422 9.283,-7.725 4.083,-3.303 7.571,-5.975 10.554,-8.035 2.003,-1.383 3.778,-2.489 4.347,-3.168 1.354,-0.047 2.716,-0.082 4.076,-0.13 4.799,-0.17 9.567,-0.51 15.589,-0.901 6.022,-0.392 13.296,-0.836 20.384,-2.097 7.089,-1.261 13.992,-3.339 19.683,-6.271 5.692,-2.932 10.173,-6.719 13.346,-9.864 3.173,-3.146 5.039,-5.651 5.485,-7.024 0.445,-1.373 -0.53,-1.614 -1.94,-1.858 -1.41,-0.244 -3.254,-0.49 -3.767,-0.793 -0.512,-0.303 0.306,-0.662 1.665,-1.434 1.36,-0.773 3.26,-1.958 5.728,-2.734 2.469,-0.776 5.507,-1.142 7.673,-1.304 2.167,-0.163 3.462,-0.121 5.997,-1.455 2.534,-1.334 6.308,-4.042 14.008,-9.813 7.7,-5.771 19.327,-14.603 28.824,-22.415 9.496,-7.812 16.862,-14.603 21.517,-19.253 4.654,-4.651 6.597,-7.159 7.63,-8.613 1.034,-1.455 1.159,-1.855 1.292,-2.233 0.132,-0.379 0.274,-0.735 -0.983,-1.071 -1.256,-0.337 -3.91,-0.651 -6.467,-0.554 -2.557,0.097 -5.015,0.606 -8.578,1.515 -3.562,0.909 -8.228,2.218 -10.431,2.575 -2.203,0.357 -1.943,-0.236 0.025,-2.122 1.969,-1.886 5.647,-5.064 10.744,-8.002 5.097,-2.939 11.613,-5.638 16.551,-7.083 4.938,-1.446 8.298,-1.636 10.4,-1.314 2.103,0.322 2.949,1.157 6.098,-3.173 3.149,-4.33 8.603,-13.825 12.039,-21.516 3.437,-7.692 4.858,-13.58 5.447,-19.2 0.589,-5.62 0.347,-10.972 -0.096,-15.696 -0.442,-4.724 -1.083,-8.82 -2.372,-12.898 -1.289,-4.078 -3.226,-8.139 -5.489,-11.679 -2.263,-3.54 -4.853,-6.558 -7.6,-9.082 -2.746,-2.524 -5.648,-4.552 -7.099,-5.418 -0.217,-0.129 -0.403,-0.233 -0.568,-0.296 0.036,-0.006 0.074,-0.008 0.113,-0.007 -3.306,-1.709 -6.919,-2.942 -10.164,-3.622 -4.601,-0.965 -8.461,-0.817 -12.023,-0.297 -3.563,0.519 -6.829,1.41 -12.099,3.414 -5.27,2.004 -12.544,5.121 -16.552,7.274 -4.008,2.152 -4.75,3.34 -7.719,10.391 -2.969,7.051 -8.165,19.966 -10.763,26.275 -2.597,6.309 -2.597,6.012 -2.431,0.413 0.166,-5.6 0.498,-16.501 0.365,-21.363 -0.132,-4.862 -0.73,-3.684 -5.052,-0.015 -4.323,3.67 -12.37,9.831 -21.572,17.917 -9.202,8.086 -19.559,18.096 -28.188,27.685 -8.629,9.588 -15.533,18.755 -19.615,24.489 -4.082,5.734 -5.344,8.034 -6.383,12.228 -1.039,4.193 -1.856,10.28 -2.009,16.031 -0.154,5.751 0.355,11.167 0.077,13.801 -0.278,2.635 -1.344,2.49 -3.492,-0.236 -2.147,-2.727 -5.376,-8.034 -7.973,-9.161 -2.596,-1.127 -4.561,1.926 -7.251,5.902 -2.689,3.975 -6.103,8.874 -8.627,14.96 -2.524,6.087 -4.157,13.36 -5.344,21.08 -1.188,7.719 -1.93,15.883 -2.969,23.9 -1.039,8.016 -2.375,15.884 -3.034,19.966 -0.182,1.125 -0.311,1.962 -0.4,2.586 -0.245,0.224 -0.459,0.424 -0.641,0.603l0.072 -0.119c0.081,-0.652 0.233,-1.649 0.479,-3.174l0.355 -2.177c-0.294,0.076 -0.663,0.243 -1.122,0.52zm14.829 3.953l-0.119 0.005 -1.481 0.062 -0.059 0.003c0.551,-0.027 1.105,-0.049 1.659,-0.07zm-12.69 -0.722c5.216,-4.413 18.231,-14.268 37.479,-28.841 20.195,-15.291 47.251,-35.775 71.716,-61.353 24.464,-25.578 46.336,-56.248 59.528,-77.476 11.75,-18.907 16.614,-30.324 19.131,-36.863 -2.504,6.493 -7.241,17.481 -17.815,32.483 -11.875,16.849 -31.114,38.76 -46.227,55.579 -15.112,16.82 -26.097,28.547 -40.942,43.169 -14.844,14.622 -33.548,32.139 -49.567,45.945 -15.267,13.159 -28.095,22.947 -33.303,27.357zm191.305 -212.516c0.026,-0.011 0.05,-0.019 0.077,-0.026 -0.026,0.006 -0.051,0.015 -0.077,0.026z" />
                  </motion.svg >
                </Link >
              </div>
            </motion.section>
            <motion.section
              whileHover={{ y: '-1%' }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [.5, 1],
              }}
              transition={{
                duration: .2
              }}
              className="word"
            >
              <h2><em>Lorem Ipsum</em></h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, metus gravida pretium aliquam.
            </p>

              <div className="word-options">
                <div className="share" alt="Compartilhar" title="Compartilhar" >
                  <motion.svg
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    viewBox="0 0 227.216 227.216"
                  >
                    <path d="M175.897,141.476c-13.249,0-25.11,6.044-32.98,15.518l-51.194-29.066c1.592-4.48,2.467-9.297,2.467-14.317
										c0-5.019-0.875-9.836-2.467-14.316l51.19-29.073c7.869,9.477,19.732,15.523,32.982,15.523c23.634,0,42.862-19.235,42.862-42.879
										C218.759,19.229,199.531,0,175.897,0C152.26,0,133.03,19.229,133.03,42.865c0,5.02,0.874,9.838,2.467,14.319L84.304,86.258
										c-7.869-9.472-19.729-15.514-32.975-15.514c-23.64,0-42.873,19.229-42.873,42.866c0,23.636,19.233,42.865,42.873,42.865
										c13.246,0,25.105-6.042,32.974-15.513l51.194,29.067c-1.593,4.481-2.468,9.3-2.468,14.321c0,23.636,19.23,42.865,42.867,42.865
										c23.634,0,42.862-19.23,42.862-42.865C218.759,160.71,199.531,141.476,175.897,141.476z M175.897,15
										c15.363,0,27.862,12.5,27.862,27.865c0,15.373-12.499,27.879-27.862,27.879c-15.366,0-27.867-12.506-27.867-27.879
										C148.03,27.5,160.531,15,175.897,15z M51.33,141.476c-15.369,0-27.873-12.501-27.873-27.865c0-15.366,12.504-27.866,27.873-27.866
										c15.363,0,27.861,12.5,27.861,27.866C79.191,128.975,66.692,141.476,51.33,141.476z M175.897,212.216
										c-15.366,0-27.867-12.501-27.867-27.865c0-15.37,12.501-27.875,27.867-27.875c15.363,0,27.862,12.505,27.862,27.875
										C203.759,199.715,191.26,212.216,175.897,212.216z"/>
                  </motion.svg >
                </div>
                <Link className="edit" href={`/editWord`} title="Editar" alt="Editar">
                  <motion.svg
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    viewBox="0 0 250.00    240.483"
                  >
                    <path className="fil0" d="M32.465 213.6c-2.958,1.784 -9.63,8.149 -15.415,13.038 -5.785,4.89 -10.684,8.304 -13.579,10.42 -2.895,2.115 -3.785,2.932 -3.377,3.377 0.408,0.445 5.064,-2.375 8.1,-2.604 3.036,-0.229 8.089,0.81 10.65,0.625 2.561,-0.185 3.884,-1.376 4.588,-1.986 0.704,-0.61 5.2,-4.422 9.283,-7.725 4.083,-3.303 7.571,-5.975 10.554,-8.035 2.003,-1.383 3.778,-2.489 4.347,-3.168 1.354,-0.047 2.716,-0.082 4.076,-0.13 4.799,-0.17 9.567,-0.51 15.589,-0.901 6.022,-0.392 13.296,-0.836 20.384,-2.097 7.089,-1.261 13.992,-3.339 19.683,-6.271 5.692,-2.932 10.173,-6.719 13.346,-9.864 3.173,-3.146 5.039,-5.651 5.485,-7.024 0.445,-1.373 -0.53,-1.614 -1.94,-1.858 -1.41,-0.244 -3.254,-0.49 -3.767,-0.793 -0.512,-0.303 0.306,-0.662 1.665,-1.434 1.36,-0.773 3.26,-1.958 5.728,-2.734 2.469,-0.776 5.507,-1.142 7.673,-1.304 2.167,-0.163 3.462,-0.121 5.997,-1.455 2.534,-1.334 6.308,-4.042 14.008,-9.813 7.7,-5.771 19.327,-14.603 28.824,-22.415 9.496,-7.812 16.862,-14.603 21.517,-19.253 4.654,-4.651 6.597,-7.159 7.63,-8.613 1.034,-1.455 1.159,-1.855 1.292,-2.233 0.132,-0.379 0.274,-0.735 -0.983,-1.071 -1.256,-0.337 -3.91,-0.651 -6.467,-0.554 -2.557,0.097 -5.015,0.606 -8.578,1.515 -3.562,0.909 -8.228,2.218 -10.431,2.575 -2.203,0.357 -1.943,-0.236 0.025,-2.122 1.969,-1.886 5.647,-5.064 10.744,-8.002 5.097,-2.939 11.613,-5.638 16.551,-7.083 4.938,-1.446 8.298,-1.636 10.4,-1.314 2.103,0.322 2.949,1.157 6.098,-3.173 3.149,-4.33 8.603,-13.825 12.039,-21.516 3.437,-7.692 4.858,-13.58 5.447,-19.2 0.589,-5.62 0.347,-10.972 -0.096,-15.696 -0.442,-4.724 -1.083,-8.82 -2.372,-12.898 -1.289,-4.078 -3.226,-8.139 -5.489,-11.679 -2.263,-3.54 -4.853,-6.558 -7.6,-9.082 -2.746,-2.524 -5.648,-4.552 -7.099,-5.418 -0.217,-0.129 -0.403,-0.233 -0.568,-0.296 0.036,-0.006 0.074,-0.008 0.113,-0.007 -3.306,-1.709 -6.919,-2.942 -10.164,-3.622 -4.601,-0.965 -8.461,-0.817 -12.023,-0.297 -3.563,0.519 -6.829,1.41 -12.099,3.414 -5.27,2.004 -12.544,5.121 -16.552,7.274 -4.008,2.152 -4.75,3.34 -7.719,10.391 -2.969,7.051 -8.165,19.966 -10.763,26.275 -2.597,6.309 -2.597,6.012 -2.431,0.413 0.166,-5.6 0.498,-16.501 0.365,-21.363 -0.132,-4.862 -0.73,-3.684 -5.052,-0.015 -4.323,3.67 -12.37,9.831 -21.572,17.917 -9.202,8.086 -19.559,18.096 -28.188,27.685 -8.629,9.588 -15.533,18.755 -19.615,24.489 -4.082,5.734 -5.344,8.034 -6.383,12.228 -1.039,4.193 -1.856,10.28 -2.009,16.031 -0.154,5.751 0.355,11.167 0.077,13.801 -0.278,2.635 -1.344,2.49 -3.492,-0.236 -2.147,-2.727 -5.376,-8.034 -7.973,-9.161 -2.596,-1.127 -4.561,1.926 -7.251,5.902 -2.689,3.975 -6.103,8.874 -8.627,14.96 -2.524,6.087 -4.157,13.36 -5.344,21.08 -1.188,7.719 -1.93,15.883 -2.969,23.9 -1.039,8.016 -2.375,15.884 -3.034,19.966 -0.182,1.125 -0.311,1.962 -0.4,2.586 -0.245,0.224 -0.459,0.424 -0.641,0.603l0.072 -0.119c0.081,-0.652 0.233,-1.649 0.479,-3.174l0.355 -2.177c-0.294,0.076 -0.663,0.243 -1.122,0.52zm14.829 3.953l-0.119 0.005 -1.481 0.062 -0.059 0.003c0.551,-0.027 1.105,-0.049 1.659,-0.07zm-12.69 -0.722c5.216,-4.413 18.231,-14.268 37.479,-28.841 20.195,-15.291 47.251,-35.775 71.716,-61.353 24.464,-25.578 46.336,-56.248 59.528,-77.476 11.75,-18.907 16.614,-30.324 19.131,-36.863 -2.504,6.493 -7.241,17.481 -17.815,32.483 -11.875,16.849 -31.114,38.76 -46.227,55.579 -15.112,16.82 -26.097,28.547 -40.942,43.169 -14.844,14.622 -33.548,32.139 -49.567,45.945 -15.267,13.159 -28.095,22.947 -33.303,27.357zm191.305 -212.516c0.026,-0.011 0.05,-0.019 0.077,-0.026 -0.026,0.006 -0.051,0.015 -0.077,0.026z" />
                  </motion.svg >
                </Link >
              </div>
            </motion.section>
          </>
        )
        }
        {screenState === screenStates.SEARCH_NO_RESULT && (
          <div className="no-result-message">
            <p>O vocábulo <em>Lorem Ipsum </em> não foi encontrado</p>
          </div>
        )
        }
      </WordsContainer>
    </>
  )
}
