import styled from 'styled-components';
import Link from  '../Link';

const LogoBlock = styled.a`
	display: flex;
  flex-direction: column;
  align-items: center;
	.logo-icon {
  	width: 7rem;
  	fill: #fefefe;
  	transition: background-color  200ms;
	}
	.logo-title {
  	width: 250px;
  	height: 45px;
  	fill: #fefefe;
  	transition: background-color  200ms;
	}
  @media (min-width: 765px) { 
    flex-direction: row;
		width: 200px;
    .logo-icon {
      margin-right: 5px;
    }
  }
	@media (min-width: 1025px) {
		width: 250px;
    .logo-icon {
  	width: 5rem;
    margin-right: 5px;
    }
    .logo-title {
      width: 200px;
    }
  }
`;

function LogoBlck() {
  return(
    <LogoBlock 
      as={Link}
      href="/words" className="logo-block" alt="index Legendarium" title="index Legendarium">
    	<svg className="fill0 logo-icon" version="1.1" viewBox="0 0 5000 5000">
        <path className="fil0" d="M4186.01 3222.66l271.22 38.71c-66.59,-35.38 -156.85,-80.04 -216.4,-94.22 54.85,-6.85 205.81,-21.61 233.01,-23.23 10.99,-0.65 -69.39,-33.8 -285.9,-26.07 -45.97,9.05 -109.98,14.73 -156.19,30.31 -99.72,33.63 -197.64,69.97 -298.55,101.39 -51.54,16.05 -103.5,31.21 -155.56,45.01 -40.29,10.68 -40.86,15.73 -80.18,-1.06 -22.08,-9.43 -44.96,-20.68 -65.73,-32.7 -56.61,-32.76 -81.63,-43.36 -146.92,-54.37 -37.84,-6.37 -148.4,-15.6 -182.4,-7.76 3.33,8.66 17.33,14.53 25.42,20.74 8.02,6.16 15.4,14.65 22.65,21.52 35.36,33.44 151.13,78.78 167.25,96.84 -78.39,29.27 -221.34,-8.86 -295.81,-45.47 -67.3,-33.08 -174.2,-109.28 -170.3,-199.46 20.34,-29.65 50.18,-61.69 72.39,-92.07 58.33,-79.8 155.45,-207.24 221.25,-269.01 88.47,-83.07 181.24,-148.94 292.8,-192.75 18.46,-7.25 113.66,-34.91 119.03,-38.83 -39.1,-43.91 -165.65,-19.48 -216.06,-4.87 -128.15,37.15 -245.04,100.66 -360.29,169.63 -23.13,13.84 -151.83,99.5 -162.16,102.22 -5.36,-17.13 -7.93,-51.3 -12.48,-71.97 -15.45,-70.27 -36.37,-135.53 -43.21,-207.9 -7.16,-75.7 1.58,-154.85 25.87,-226.28 3.95,-11.6 15.02,-54 26.58,-54.15l0.09 -3.31c0.35,-27.54 86.73,-138.59 107.63,-145.02l4.25 10.41c-3.82,-41.37 43.04,-26.81 67.56,-23.73 25.08,3.15 60.74,11.1 83.95,11.48l-108.51 -35.48c21.73,-19.93 32.76,-30.31 63.21,-43.35 17.02,-17.59 102.69,-47.73 128.53,-55.15 49.77,-14.28 102.43,-23.43 153.88,-26.6 277.87,-17.17 575.63,126.49 751.99,345.12 27.59,34.21 59.42,67.86 85.49,102.87 25.94,34.83 57.2,67.42 84.84,100.64 121.02,145.49 258.62,253.52 436.96,299.14 153.15,39.17 328.66,9.3 324.72,8.37 -129.07,-12.25 -236.11,-35.27 -349.45,-104.93 -93.42,-57.42 -117.3,-81.94 -192.81,-151.02l-110.92 -118.52c-32.32,-38.95 -189.11,-232.24 -209.09,-250.66 -18.07,-16.66 -36.52,-41.9 -54.29,-59.07 -67.14,-64.88 -72.07,-56.81 -129.62,-98.4 8.28,-2.96 100.94,12.89 119.47,15.18 210.03,25.97 400.66,26.1 596.74,-64.33 34.16,-15.75 145.68,-82.79 167.08,-113.48 -23.48,3.15 -57.65,15.43 -82.28,21.57 -219.5,54.76 -410.37,59.9 -635.16,12.94 -243.26,-50.82 -432.25,-128.95 -689.1,-124.24 15.33,-19.95 339.98,-196.65 464.99,-319.26 16.71,-16.39 35.06,-31.46 51.04,-48.29 85,-89.53 151.34,-188.99 178.06,-314.72 7.1,-33.4 20.56,-161.53 5.4,-185.22 -10.39,23.31 -18.99,58.69 -29.65,84.9 -35.22,86.62 -65.33,137.63 -122.58,211.62 -65.89,85.14 -151.91,145.12 -243.34,197.09 -151.69,86.21 -319.05,124.3 -464.41,192.51 -24.98,11.72 -48.92,23.41 -73.58,35.75 -21.63,10.82 -52.06,32.6 -71.14,40.17 7.16,-23.25 25.56,-57.21 35.25,-83.87 71.85,-197.67 61.53,-496.28 108.91,-716.44 44.9,-208.67 103.82,-319.32 245.93,-454.05 47.8,-45.32 115.45,-79.24 131.97,-94.68 -29.35,2.38 -105.61,32.59 -135.19,45.74 -40.06,17.8 -79.87,39.12 -116.12,64.46 -392.81,274.5 -267.45,898.92 -547.1,1304.83 -77.43,112.39 -180.18,181.25 -264.74,282.62 -13.12,15.72 -74.31,95.96 -82.18,101.58 -23.24,-14.21 -78.5,-100.4 -91.11,-129.19 -28.06,-64.1 -31.05,-117.76 -6.81,-184.12 84.67,-231.74 480.53,-377.06 372.47,-903.59 -6.72,7.14 -5.75,6.13 -6.85,18.49 -3.89,43.98 -11.62,90.87 -22.2,133.3 -11.33,45.45 -25.71,89.36 -44.3,132.3 -32.24,74.47 -87.84,152.58 -142.37,207.65 -27.83,28.1 -59.59,57.12 -89.56,84.18 -14.05,12.68 -32.74,29.61 -47.23,40.97 -33.98,26.62 -100.61,96.68 -126.69,133.13 -32.3,45.14 -57.5,108.23 -60.43,111.9 -14.47,-13.66 -44.52,-88.98 -52.97,-111.4 -15.02,-39.86 -27.98,-90.66 -32.91,-133.25 -53.92,-465.53 529.71,-674.57 662.64,-965.33 49.02,-107.21 58.02,-299.06 -6.98,-413.95 -14.34,-25.34 -51.38,-73 -77.22,-83.12 17.99,55.76 45.14,83.9 52.04,174.68 5.18,68.21 -8.28,126.51 -35.98,187.11 -109.79,240.21 -482.11,411.48 -627.92,594.47 -20.79,26.09 -39.38,62.28 -44.42,67.12 -5.03,-289.73 57.9,-591.69 -193.84,-791.04 -46.28,-36.65 -162.16,-93.89 -218.35,-102 5.45,7.16 61.56,45.26 74.48,55.58 21.28,16.98 48.02,40.26 66.88,59.95 41.6,43.45 75.33,100.46 96.98,158.86 103.52,279.15 -148.67,675.86 -31.99,1162.94 8.23,34.35 17.18,67.95 28.05,101.42 10.09,31.08 26.59,67.2 34.61,96.96 -37.34,-3.64 -86.33,-16 -125.53,-22.23 -188.64,-29.93 -286.51,-1.74 -450.77,-133.59 -28.17,-22.61 -49.62,-49.69 -75.39,-73.65 -22.47,-20.91 -44.18,-69.27 -49.96,-100.63 -8.09,-43.9 -0.92,-89.04 11.78,-131.13 68.53,-227.15 310.81,-472.77 178.69,-801.74 -9,-22.42 -36.19,-84.89 -53.25,-97.25l17.52 90.32c0.61,12.73 3.77,8.21 -3.56,11.94 2.92,7.65 6.2,8.96 2.14,16.55 23.6,47.31 -8.03,206.96 -25.81,259.15 -65.48,192.22 -178.36,316.9 -244.03,484.25 -6.92,17.62 -13.08,36.11 -18.25,54.7 -5.02,18.04 -8.19,44.2 -13.39,59.52 -52.23,-18.66 -253,-280.59 -542.74,-184.17 -45.36,15.09 -132.42,53.46 -168.93,84.08 18.8,-1.44 53.89,-13.76 75.86,-17.88 28.66,-5.38 55.16,-8.48 84.22,-10.27 55.54,-3.44 111.8,4.19 164.67,21.71 70.11,23.24 120.66,62.28 174.23,110.87 16.99,15.41 30.7,33.47 46.73,47.24 62.43,53.61 172.48,251.26 312.38,357.36 17.18,13.03 52.2,31.38 53.61,38.41 -13.76,7 -52.49,16.9 -70.71,23.74 -21.74,8.16 -44.57,17.57 -66.05,26.92 -206.6,89.9 -653.31,336.81 -842.31,209.25 -60.09,-40.56 -64.84,-81.37 -84.38,-106.46 -3.51,24.41 13.09,54.77 17.43,78.27l-22.39 -0.46 19.48 3.29c0.03,11.24 3.96,3.23 -3.78,11.27l14.58 -2.85c25.22,55.59 91.04,87.91 144.96,104.89 154.77,48.74 372.13,1.33 520.66,-60.5 28.71,-11.95 56.64,-31.16 82.77,-41.75l-149.95 184.05c-15.08,18.44 -32.6,43.39 -48.16,59.92 -14.86,15.79 -36.94,42.77 -50.46,60.26 -47.25,61.14 -103.19,118.35 -159.83,169.19 -154.49,138.68 -297.3,224.23 -493.77,270.05 -19.88,4.64 -75.75,9.57 -88.35,18.48 174.61,13.77 317.06,-12.31 472.16,-100.66 112.55,-64.12 244.03,-159.54 334.85,-256.4 47.39,-50.55 99.95,-99.27 148.01,-150.32 47.78,-50.75 95.05,-102.29 144.46,-151.28 12.42,-12.32 22.2,-25.86 36.13,-38.47 39.07,-35.37 76.05,-73.58 118.57,-104.68 352.85,-258.2 752.85,-46.28 875.28,376.94 49.18,169.99 57.2,367.91 18.76,541.15 -34.85,157.07 -105.32,297.04 -267.24,324.44 2.67,-14.22 107.59,-138.59 124.91,-163.41 -36.49,20.22 -70.11,39.6 -108.36,56.33 -36.99,16.18 -87.17,25.81 -116.98,49.43 -34.41,27.27 -32.12,73.47 -90.21,76.8 -148.33,8.52 -296.22,-11.61 -440.75,-45.11 -133.81,-31.01 -254.46,-44.89 -363.78,-57.83l-193.46 27.73 -146.76 55.94c39.32,-5.03 193.79,-3.54 256.17,-2.17 51.31,1.13 250.29,12.33 286.97,37.64 -53.18,5.28 -91.56,16.77 -144.95,17.61 -60.91,0.96 -93.06,0.47 -149.91,24.75 -52.8,22.56 -101.89,34.3 -152.21,42.53l-68.58 17.15c82.76,2.3 255.1,-11.87 327.61,24.66 -4.68,36.13 -110.69,65.56 -136.28,89.17 42.98,0 147.25,-16.55 187.79,-30.78 50.56,-17.76 98.2,-47.46 146.57,-71.81 52.28,-26.31 131.62,-26.16 190.31,-28.37 69.88,-2.64 142.09,-5.22 211.93,-3.38 -9.48,8.77 -154.54,56.61 -179.9,66.04 -60.45,22.46 -112.52,50.11 -174.5,70.71 -45.36,15.07 -144.12,51.44 -183.38,61.1 -35.68,8.78 -56.95,21.51 -116.43,30.83l-181.39 79.81 -3.37 3.92c46.76,2.87 359.25,-42.81 376.04,-35.24 -5.43,11.26 -104.55,73.49 -114.39,82.82 -8.88,8.44 -139.07,181.04 -146.12,188.98l185.97 -153.64c35.94,-19.77 37.25,-26.7 79.61,-48.61 39.92,-34.35 29.34,-29.56 61.38,-55.19 50.28,-21.71 103.28,-40.03 157.87,-43.22 49.09,-2.86 104.24,-29.89 148.42,-52.5 45.09,-23.08 85.58,-49.95 132.45,-69.8 33.94,-14.39 119.86,-48.26 153.64,-40.46 -0.54,12.54 -105.99,80.24 -210.56,136.37 -88.39,47.44 -177.88,84.19 -185.23,97.38 20.08,-6.15 114.88,-25.37 202.65,-61.6 103.01,-42.53 201.38,-103.12 232.97,-113.54 45.07,-14.87 172.46,-43.72 213.75,-26.79 -0.71,29.72 -96.93,56.22 -121.04,65.07 -236.42,86.79 -111.47,23.73 -235.37,114.43 -18.74,13.72 -121.22,33.36 -217.52,64.24 -88.79,28.47 -171.93,68.33 -188.55,80.52 28.33,-0.65 422.83,-72.12 451.14,-85.23 48.39,-22.39 78.59,-42.64 131.56,-59.89 71.15,-23.17 229.32,-74.05 297.27,-84.15 -15.43,12.88 -184,103.2 -247.09,152.11 -55.04,42.66 -47.19,58.28 -122.35,77.8 -53.77,13.97 -110,19.76 -162.86,34.94 -26.51,7.61 -46.08,21.53 -73.03,27.14 -88.15,18.34 -142.69,37.37 -231.58,47.51 -73.89,8.43 -118.65,16.25 -183.76,66.61 -16.6,25.77 -132.15,112.55 -139.47,140.39 57.87,-25.42 262.96,-117.81 304.76,-126.87 111.21,-24.09 304.24,-53.76 416.53,-58.99 42.21,-1.96 151.47,4.37 181.79,-13.85 28.34,-17.03 38.81,-61.74 101.29,-100.33 47.68,-29.45 225.2,-114.21 274.35,-125.07 -3.77,7.04 -75.86,87.17 -85.04,95.73 -29.44,27.5 -56.68,65.96 -82.89,96.99 -28.7,33.99 -45.83,75.48 -82.9,97.17 -109.19,63.88 -318.5,66.47 -458.54,121.9 -57.19,22.64 -36.18,16.86 -119.38,33.88l-271.08 29.23 -109.5 37.18c-18.5,10.75 71.58,-3.68 165.54,7.43 116.57,13.79 283.2,-12.73 297.29,-13.19 -1.38,4.27 -85.35,29.31 -91.87,45.38 -11.68,28.82 -226.54,102.83 -236.85,121.2l263.34 -38.95c71.9,-31.64 192.36,-71.31 245.69,-71.23 3.71,38.95 -3.92,137.78 -12.25,176.81 -6.62,30.98 -22.5,34.78 -49.5,40.4 -57.63,12 -116.24,-6 -176.65,13.16l-90.65 44.74c66.43,7.31 220.51,-2.26 244.62,12.26 -0.24,17.71 -35.16,69.52 -67.94,114.46l190.52 -61.8c32.8,-27.16 54.96,-32.66 64.99,-59.1 12.49,-32.91 2.17,-38.78 4.29,-73.49 3.31,-54.22 25.59,-127.03 44.99,-177.77 18.72,-48.95 47.73,-130.09 106.02,-65.22 22.75,25.3 25.17,39.72 41.16,67.38 24.54,42.47 144.06,138.4 174.72,146.98 -7.62,-32.58 -34.35,-93.16 -46.25,-129.73 -43.18,-132.71 -60.55,-151.61 28.24,-251.73 16.18,-18.24 68.42,-75.99 91.56,-80.41 5.1,48.41 -27.86,126.52 -11.3,170.86 16,42.81 88.99,113.14 121.25,153.15 13.92,17.26 27.38,33.15 40.47,51.07 36.96,50.62 54.7,69.46 1.21,112.59 -134.37,108.33 -227.69,166.35 -369.88,261.66l-89.16 132.96c13.26,-8.72 182.03,-102.49 198.24,-97.65 -5.46,40.68 -4.5,107.17 -6.02,162.65l110.69 -143.27c9.81,-24.59 136.76,-155.29 148.47,-179.18 13.62,-27.77 -92.84,237.17 -72.69,216.23 63.72,-66.24 253.41,-280.28 315.96,-344.89 28.78,-29.72 19.84,-47.06 3.33,-83.24 -11.91,-26.08 -26.49,-49.08 -41.51,-72.66 -13.75,-21.6 -88.61,-121.97 -86.39,-139.67 14.74,-11.35 41.69,-6.34 60.4,-6.44 17.53,-0.09 48.65,-5.59 62.81,-1.87 66.84,17.52 200.15,103.59 257.73,142.9 -16.08,-32.69 -67.52,-90.7 -91.56,-122.6 -36.11,-47.91 -54.41,-82.43 -111.1,-104.28 -51.39,-19.81 -112.99,-31.76 -166.93,-44.71 -48.14,-11.56 -61.13,-7.26 -61.76,-46.31 -0.72,-44.16 19.43,-278.4 89.53,-202.62 33.36,36.07 49.49,91.63 85.77,128.22 18.38,18.54 40.21,30.12 60.42,46.87 18.33,15.19 40.49,34.98 56.28,51.28 17.71,18.27 89.8,104.22 101.97,109.5 -1.87,-16.6 -91.25,-194.23 -106.03,-224.94 -24.45,-50.83 -20.47,-65.13 -62.64,-104.36 -61.35,-57.06 -223.02,-177.34 -250.01,-241.38 -19.39,-46.02 -48.92,-226.84 -52.82,-281.45 14.05,12.22 105.42,178.57 121.7,208.21 38.8,70.67 112.26,100.76 168.46,154.19 62.49,59.41 32.83,42.34 67.44,96.39 53.84,84.07 128.29,71.87 184.03,137.61 24.35,28.72 46.35,62.43 65.94,95.17 69.17,115.57 72.23,140.39 39.58,250.7 -40.57,137.06 -50.06,229.54 -217.35,270.07 -77.68,18.82 -341.54,418.92 -393.96,476.42 24.1,-2.81 110.26,-59.2 176.81,-128.6 40.42,-42.17 122.53,-124.47 156.25,-153.94 104.58,-82.14 108.39,-55.14 104.66,-15.07l-124.02 171.8 -60.7 130.44c9.71,-19.66 107.35,-94.33 146.68,-145.86 62.99,-82.53 124.36,-181.04 136.91,-186.04 2.64,53.34 -41.71,259.6 -42.43,311.27l98.96 -106.34c-29.85,-52.26 15.27,-145.99 16.28,-165.93 30.9,-4.9 62.3,16.35 98.33,38.66 18.66,11.55 39.89,55.13 52.39,76.75 7.02,14.76 24.88,59.35 34.55,74.42l-27.21 -150.37c-3.05,-22.45 -19.57,-53.29 -40.21,-64.35 -30.25,-16.21 -69.15,-35.29 -88.72,-58.02 0.67,-24.81 19.15,-79.13 36.22,-93.92 37.4,-32.4 67.01,-42.04 112.52,-20.33 77.84,37.12 202.06,267.97 231.2,285.97 -27.77,-52.97 -141.42,-292.47 -181.24,-327.75 -30.29,-26.83 -49.29,-45.77 -64.27,-88.41 -12.23,-34.82 -24.95,-98.11 -20.76,-134.75 9.51,-4.84 153.76,-28.65 186.1,18.57 34.07,49.76 46.91,99.92 74.08,152.06 24.85,47.72 34.87,113.52 47,182.42l143.9 87.85c-14.46,-36.13 -22.26,-84.91 -30.96,-121.22 -14.78,-61.73 -56.54,-234.36 -63.69,-288.22 51.21,7.67 107.8,3.92 429.93,19.05 28.11,6.9 72.16,-6.61 101.58,4.8l-190.7 -99.58c-91.57,-24.83 -113.08,-37.93 -204.11,-61.73 -131.84,-21.37 -362.99,-104.1 -479.99,-173.03 -56.71,-33.41 -132.86,-105.72 -164.79,-165.28 21.42,1.96 138.26,49.77 166.44,60.89 65.07,25.66 180.79,64.29 239.68,101.13 48.87,30.56 104.52,49.31 157.61,68.59 21.22,7.71 63.08,24.97 83.87,28.17 -1.71,-27.55 -12.08,-50.48 -4,-80.41 8.3,-30.77 35.02,-26.23 59.71,-26.22 54.43,0.02 102.05,0.79 156.42,3.39 57.9,2.77 137.61,1.28 201.19,20.94l187.11 37.95c-70.74,-68.37 -150.61,-148.06 -237.9,-170.92 -90.9,-23.8 -205.03,-19.28 -298.78,-17.63 -258.56,4.55 -299.65,16.3 -537.74,-95.27 -36.96,-17.32 -75.01,-31.26 -112.09,-48.83 -63.75,-30.21 -259.43,-148.38 -295,-189.52 34.57,7.09 78.85,23.13 115.33,33.05 38.89,10.58 80.65,16.77 118.09,28.13 74.31,22.55 140.33,56.25 210.14,87.03 61.78,27.23 142.05,80.11 201.41,96.57 65.26,18.09 189.92,36.95 257.23,36.56 -17.34,-8.81 -59.26,-16.89 -81.7,-24.05 -214.39,-68.42 -241.09,-154.61 -337.38,-196.79 -49.36,-21.63 -102.19,-39.68 -153.49,-54.51 26.34,0.27 155.84,21.16 186.44,27.74 66.76,14.36 180.28,44.11 236.16,88.03 55.67,43.76 157.05,85.44 223.19,100.06 -7.03,-9.47 -129.74,-86.98 -154.28,-107.82 -13.26,-11.26 -20.43,-23.92 -32.96,-33.34 -33.24,-25 -109.77,-43.36 -130.91,-61.7 194.76,-10.77 274.96,62.62 441.69,106.75 80.15,20.6 190.37,67.47 277.16,100.73l231.06 51.64c-0.03,-0.16 -0.07,-0.31 -0.09,-0.46l-143.25 -145.12c-55.46,-22.65 -109.09,-40.52 -156.71,-56.39 -63.52,-11.67 -121.37,-24.66 -182.49,-43.22 -34.85,-10.58 -139.92,-47.87 -140.18,-93.35 23.86,-1.29 61.25,4.9 88.89,5.13 31.22,0.25 62.51,0.32 93.72,0.85 53.51,0.9 114.72,5.56 166.63,18.85 47.25,12.11 258.08,81.05 292.03,86.98 -13.04,-28.87 -182.07,-107.3 -227.33,-133.51 22.6,-8.28 248.94,35.95 310.65,52.11l-154.88 -88.28c-55.13,-15.31 -98.71,-58.73 -198.65,-26.9 -97.45,19.71 -159.24,22.12 -256.97,10.65 -26.14,-3.07 -118.77,0.56 -134.82,-11.47 84.99,-36.36 203.01,-66.18 294.09,-86.61 77.35,-17.35 153.53,-39.11 222.31,-37.62zm-2014.73 -22.39c1.09,-7.92 21.75,-45.23 26.85,-57.21 9.44,-22.2 15.92,-39.97 23.39,-63.7 70.16,-223.04 11.63,-524.79 -64.52,-739.53 -14.7,-41.48 -33.01,-81.98 -51.4,-121.81l-60.82 -112.73c15.01,6.31 39.35,44.16 53.36,58.08 33.08,32.87 103.2,150.51 124.69,192.19 101.61,197.05 124.38,456.33 180.45,680.22 19.76,78.91 46.65,167.9 76.24,243.86 5.86,15.04 28.84,64.02 30.26,75.35 -21.61,-18.45 -130.86,-165.92 -151.52,-197.17 -7.05,-10.64 -40.7,-69.7 -43.67,-72.27 -7.52,4.29 -20.8,29.87 -27.88,37.92 -26.5,30.17 -77.44,78.72 -115.43,76.8zm552.98 -869.17c-21.74,-115.12 43.84,-261.06 123.26,-343.95 233.54,-243.73 575.09,-235.37 849.48,-83.65 25.14,13.9 129.48,73.27 140.07,92.91 -18.56,-6.47 -51.67,-29.25 -72.19,-39.89 -62.98,-32.63 -171.35,-67.22 -239.89,-77.84 -229.35,-35.53 -472.17,-4.01 -646.01,173.26 -72.88,74.31 -106.63,144.83 -140.5,241.19 -8.14,23.18 -4.03,34.22 -14.22,37.97zm-1334.78 -523.72c-0.69,0.43 -1.49,1.02 -2.08,1.27l-7.12 2.44c-2.41,0.45 -8.26,0.44 -10.95,0.54 -19.56,0.68 -35.38,4.82 -53.46,1.4 -97.11,-18.4 -224.79,-194.22 -283.5,-271.1 -21,-27.5 -48.94,-65.22 -71.2,-89.62 -62.62,-68.63 -124.56,-145.4 -208.67,-185.42 -16.59,-7.9 -41.22,-12.65 -54.31,-20.27 68.38,-1.92 159.56,53.96 209.14,100.53l78.4 79c55.9,63.08 102.85,129.59 161.87,195.37l34.95 42.69c24.37,28.33 73.48,71.41 104.11,91.57 50.08,32.97 91.94,44.17 102.82,51.6zm1644.35 -148.21c2.26,-13.86 18.76,-36.79 25.69,-50.79 23.89,-48.24 45.05,-117.55 56.83,-170.31 41.5,-185.99 47.21,-335.72 82.34,-522.79 9.1,-48.44 46.21,-200.76 72.44,-228.94 -2.42,19.9 -11.15,41.05 -15.78,61.23 -36.18,157.76 -44.83,308.18 -62.94,469.64 -12.93,115.21 -32.16,266.81 -81.37,372.02 -8.91,19.04 -12.09,32.72 -31.02,43.79 -11.75,6.87 -34.89,22.38 -46.19,26.15zm-1064.28 20.55c-19.38,-13 -47.71,-100.6 -55.52,-127.1 -43.05,-146.01 -26.8,-347.22 -6.24,-495.26 18.44,-132.74 56.01,-364.98 52.02,-495.87 -3.39,-111.42 -16.59,-99.89 -24.88,-156.22 21.99,17.68 42.38,97.01 48.03,126.87 24.71,130.5 -10.2,360.2 -25.3,494.01 -19.34,171.35 -33.9,332.37 -14.3,504.27 4.45,39.08 26.11,147.76 26.19,149.3z"/>
    	</svg>
    	<svg className="fill0 logo-title" version="1.1" viewBox="0 0 31263.9 3899.98">
        <path className="fil0" d="M447.8 1095.01c7.69,-61.65 34.67,-111.69 80.89,-150.22 46.22,-38.54 99.18,-57.78 158.87,-57.78 55.86,0 99.68,17.83 131.43,53.45 31.8,35.63 43.81,79.44 36.12,131.44 -7.68,59.69 -35.16,109.28 -82.34,148.76 -47.18,39.49 -100.64,59.24 -160.32,59.24 -55.87,0 -99.18,-17.83 -129.98,-53.46 -30.85,-35.62 -42.4,-79.43 -34.67,-131.43zm-95.36 756.89c36.58,-111.69 24.07,-167.55 -37.53,-167.55 -42.4,0 -79.93,21.65 -112.69,65.01 -32.76,43.31 -66.42,112.19 -101.09,206.54l-46.22 121.34 -54.91 0 75.11 -213.78c44.31,-119.43 100.63,-198.86 169.01,-238.35 68.38,-39.49 136.26,-59.23 203.68,-59.23 86.67,0 144.9,21.2 174.75,63.55 29.84,42.41 41.9,94.86 36.12,157.46 -5.78,62.6 -19.25,123.75 -40.45,183.44l-306.22 878.22c-19.25,53.96 -25.02,95.36 -17.33,124.25 7.68,28.89 27.93,43.31 60.69,43.31 34.66,0 68.33,-18.74 101.08,-56.32 32.76,-37.54 69.34,-109.28 109.78,-215.24l46.23 -118.42 54.91 0 -75.11 210.87c-40.45,113.64 -94.41,191.67 -161.78,234.02 -67.43,42.36 -135.8,63.56 -205.14,63.56 -82.8,0 -141.08,-18.79 -174.79,-56.32 -33.71,-37.58 -48.63,-88.63 -44.77,-153.14 3.87,-64.51 19.25,-135.3 46.23,-212.32l300.44 -860.9zm840.7 1242.23l-303.31 0 346.66 -1242.23c7.69,-25.02 13.93,-50.54 18.75,-76.56 4.82,-25.98 3.37,-47.68 -4.32,-65.02 -7.69,-17.33 -25.98,-25.97 -54.87,-25.97 -38.53,0 -73.7,19.24 -105.46,57.77 -31.8,38.54 -65.96,109.78 -102.54,213.78l-43.36 121.34 -54.86 0 72.2 -213.78c42.35,-117.47 94.85,-196.45 157.45,-236.89 62.6,-40.45 128.57,-60.69 197.9,-60.69 80.89,0 134.8,21.2 161.78,63.55 26.94,42.41 37.54,94.41 31.76,156.01 -5.78,61.64 -16.38,123.29 -31.76,184.89l-286.02 1123.8zm118.47 -563.36c69.33,-184.89 136.25,-339.43 200.76,-463.63 64.52,-124.25 127.57,-222.93 189.22,-296.13 61.64,-73.2 124.7,-125.65 189.21,-157.45 64.51,-31.76 132.43,-47.68 203.68,-47.68 92.44,0 156.5,21.2 192.12,63.55 35.62,42.41 52,96.82 49.09,163.24 -2.87,66.47 -15.88,136.26 -38.99,209.46l-280.2 846.42c-19.29,52 -26.02,92.95 -20.25,122.79 5.78,29.85 26.98,44.77 63.56,44.77 32.76,0 65.97,-18.29 99.68,-54.87 33.71,-36.57 69.79,-108.82 108.32,-216.69l43.36 -118.42 54.86 0 -72.19 210.87c-42.41,121.33 -97.77,201.27 -166.15,239.8 -68.38,38.53 -134.3,57.78 -197.86,57.78 -94.4,0 -159.87,-28.89 -196.44,-86.67 -23.11,-36.58 -31.8,-83.3 -26.03,-140.12 5.78,-56.83 21.2,-121.79 46.23,-194.99l268.69 -811.81c9.6,-28.89 17.33,-60.64 23.11,-95.31 5.78,-34.67 4.78,-65.01 -2.91,-90.99 -7.69,-26.02 -31.76,-39.03 -72.2,-39.03 -53.96,0 -113.19,33.25 -177.7,99.68 -64.52,66.46 -130.48,157.45 -197.86,273.01 -67.42,115.55 -132.44,249.4 -195.04,401.53 -62.6,152.18 -118.92,313.96 -168.96,485.34l80.89 -404.45zm2311.12 317.78c-13.51,44.31 -17.83,83.3 -13.01,117.02 4.82,33.71 25.52,50.54 62.1,50.54 34.67,0 67.88,-19.24 99.68,-57.78 31.76,-38.49 65.01,-109.78 99.68,-213.78l40.44 -118.42 54.87 0 -69.33 210.87c-36.58,117.51 -88.58,196.44 -156.01,236.89 -67.42,40.49 -131.93,60.69 -193.53,60.69 -117.51,0 -182.98,-51.05 -196.44,-153.14 -7.74,-32.71 -9.19,-71.7 -4.37,-116.96 4.82,-45.27 15.92,-95.82 33.25,-151.68l410.23 -1545.59c17.33,-65.47 14.42,-113.6 -8.69,-144.45 -23.11,-30.8 -81.85,-46.22 -176.2,-46.22l17.33 -60.64c117.47,-1.91 220.97,-13.01 310.55,-33.21 89.53,-20.25 174.79,-48.64 255.68,-85.26l-566.23 2051.12zm-661.58 176.25c42.36,0 91.49,-26.02 147.36,-78.02 55.82,-52 112.64,-124.2 170.42,-216.65 57.78,-92.44 112.19,-200.77 163.23,-325.01 51.05,-124.2 92.9,-256.64 125.66,-397.22l-43.31 312.01c-71.29,194.53 -142.08,351.49 -212.37,470.86 -70.29,119.43 -142.99,206.6 -218.1,261.46 -75.11,54.91 -157.91,82.35 -248.45,82.35 -92.44,0 -168.05,-31.76 -226.79,-95.36 -58.73,-63.55 -88.07,-161.78 -88.07,-294.67 0,-90.49 14.92,-188.71 44.76,-294.67 29.85,-105.91 72.2,-210.86 127.11,-314.86 54.87,-104.01 121.34,-198.86 199.32,-284.57 78.02,-85.71 165.14,-154.55 261.45,-206.55 96.32,-52 200.32,-78.02 312.01,-78.02 50.08,0 92.94,15.92 128.56,47.68 35.63,31.8 55.37,78.47 59.24,140.12l-23.11 57.78c-7.74,-63.56 -25.07,-109.28 -52,-137.21 -26.98,-27.94 -59.74,-41.9 -98.23,-41.9 -82.84,0 -162.78,36.57 -239.8,109.77 -77.02,73.21 -145.9,168.52 -206.54,285.98 -60.69,117.52 -108.83,243.17 -144.45,377.02 -35.62,133.84 -53.46,262.41 -53.46,385.65 0,78.98 9.65,137.72 28.89,176.25 19.25,38.53 48.14,57.78 86.67,57.78zm1432.9 -577.78c98.22,-34.67 188.25,-70.29 270.1,-106.91 81.84,-36.58 148.81,-76.07 200.81,-118.43 71.25,-59.69 127.57,-130.48 168.97,-212.32 41.4,-81.85 62.15,-171.92 62.15,-270.15 0,-50.04 -3.87,-82.3 -11.56,-96.76 -7.73,-14.43 -19.29,-21.66 -34.67,-21.66 -55.86,0 -118.47,32.26 -187.8,96.77 -69.33,64.51 -134.34,150.72 -194.99,258.54 -60.69,107.87 -110.73,226.34 -150.22,355.36 -39.49,129.02 -59.24,258.09 -59.24,387.11 0,100.14 18.79,171.43 56.33,213.78 37.57,42.36 87.16,63.56 148.81,63.56 63.56,0 133.84,-19.74 210.87,-59.23 77.02,-39.49 153.13,-110.24 228.24,-212.33l46.23 23.11c-38.54,63.56 -88.63,125.21 -150.23,184.89 -61.64,59.69 -131.48,108.33 -209.45,145.91 -78.03,37.53 -162.28,56.32 -252.77,56.32 -121.34,0 -219.1,-34.17 -293.26,-102.55 -74.16,-68.38 -111.19,-169.97 -111.19,-304.81 0,-88.58 15.88,-185.35 47.63,-290.3 31.8,-104.96 77.07,-208.5 135.8,-310.59 58.74,-102.05 128.57,-195.95 209.46,-281.66 80.89,-85.71 171.38,-153.59 271.56,-203.68 100.13,-50.04 206.04,-75.11 317.78,-75.11 69.33,0 127.11,16.88 173.33,50.59 46.23,33.71 69.34,84.25 69.34,151.63 0,77.07 -21.7,148.81 -65.01,215.24 -43.36,66.46 -101.59,126.65 -174.8,180.56 -73.2,53.92 -152.63,102.09 -238.34,144.45 -85.71,42.36 -171.38,78.98 -257.09,109.78 -85.71,30.8 -162.28,55.87 -229.66,75.11l2.87 -46.22zm1961.59 416c7.69,50.09 19.7,84.76 36.08,104 16.37,19.25 37.07,28.89 62.14,28.89 26.93,0 55.37,-16.38 85.21,-49.13 29.85,-32.71 64.01,-103 102.55,-210.87l37.58 -106.91 54.86 0 -72.2 210.91c-26.98,78.98 -59.73,139.62 -98.22,181.98 -38.53,42.4 -78.98,71.74 -121.33,88.12 -42.4,16.38 -85.72,24.57 -130.03,24.57 -67.42,0 -125.65,-19.75 -174.79,-59.24 -49.09,-39.49 -79.43,-110.23 -90.99,-212.32l-115.55 -1025.58c-7.69,-50.05 -20.2,-84.26 -37.54,-102.55 -17.33,-18.29 -38.53,-27.43 -63.55,-27.43 -26.98,0 -55.41,15.87 -85.26,47.68 -29.84,31.75 -63.05,101.59 -99.63,209.41l-37.58 106.91 -54.87 0 72.2 -210.91c28.89,-78.94 61.65,-139.63 98.23,-181.98 36.57,-42.36 77.02,-71.75 121.33,-88.12 44.31,-16.38 88.58,-24.57 132.89,-24.57 75.11,0 134.8,19.29 179.11,57.78 44.31,38.53 72.25,112.69 83.8,222.46l115.56 1016.9zm208 -1112.25c-82.85,82.84 -150.72,180.57 -203.68,293.26 -52.95,112.64 -93.9,212.32 -122.79,298.99 0,0 -9.64,-0.5 -28.89,-1.46 -19.24,-0.95 -28.89,-1.45 -28.89,-1.45 15.43,-46.23 35.63,-102.55 60.69,-168.97 25.02,-66.47 58.24,-137.26 99.64,-212.37 41.4,-75.11 91.99,-147.31 151.67,-216.65 55.87,-65.46 107.37,-111.23 154.55,-137.21 47.18,-26.02 94.86,-39.03 143.04,-39.03 46.22,0 83.75,12.05 112.64,36.12 28.89,24.07 43.36,57.32 43.36,99.68 0,44.31 -15.93,82.34 -47.68,114.1 -31.8,31.8 -73.66,47.68 -125.66,47.68 -46.22,0 -87.67,-10.6 -124.24,-31.8 -36.58,-21.16 -64.52,-48.14 -83.76,-80.89zm-907.12 1198.92c84.71,-82.8 158.87,-179.11 222.43,-288.89 63.55,-109.78 111.69,-210.92 144.44,-303.36 0,0 8.69,1.45 26.02,4.37 17.34,2.86 25.98,4.32 25.98,4.32 -19.24,53.91 -43.31,113.14 -72.2,177.65 -28.89,64.52 -65.01,131.94 -108.37,202.23 -43.31,70.29 -96.76,140.12 -160.32,209.46 -55.87,61.64 -108.32,106.86 -157.46,135.75 -49.08,28.94 -96.76,43.36 -142.99,43.36 -50.08,0 -88.57,-12.06 -115.55,-36.13 -26.98,-24.06 -40.45,-56.32 -40.45,-96.76 0,-46.22 16.84,-85.21 50.55,-117.01 33.71,-31.76 74.65,-47.68 122.79,-47.68 50.09,0 91.49,11.55 124.24,34.66 32.71,23.12 59.69,49.14 80.89,78.03z"/>
      	<path className="fil0" d="M8277.07 304.95l0 80.26c-90.95,2.64 -159.83,12.69 -206.64,30.07 -46.81,17.38 -78.25,49.5 -94.31,96.31 -16.02,46.81 -24.07,119.7 -24.07,218.65l0 2006.17c0,90.95 7.37,159.19 22.07,204.64 14.74,45.49 44.13,75.56 88.3,90.26 44.13,14.74 107.64,22.11 190.58,22.11l260.77 0c155.19,0 278.2,-28.8 369.15,-86.3 90.94,-57.51 160.5,-145.09 208.64,-262.78 48.17,-117.69 82.93,-267.51 104.31,-449.4l92.31 0c-8.05,85.58 -12.05,197.95 -12.05,337.03 0,53.5 2,131.75 6.05,234.75 4,102.95 11.33,209.28 22.06,318.96 -136.44,-5.37 -290.25,-8.69 -461.45,-10.01 -171.2,-1.36 -323.65,-2.04 -457.4,-2.04 -82.94,0 -193.26,0 -331.02,0 -137.76,0 -284.89,0.68 -441.34,2.04 -156.51,1.32 -302.95,4.64 -439.35,10.01l0 -80.25c90.95,-5.32 159.14,-16.06 204.59,-32.07 45.5,-16.06 75.57,-48.18 90.31,-96.32 14.7,-48.13 22.07,-120.37 22.07,-216.69l0 -1990.11c0,-98.95 -7.37,-171.84 -22.07,-218.65 -14.74,-46.81 -45.49,-78.93 -92.31,-96.31 -46.81,-17.38 -114.33,-27.43 -202.59,-30.07l0 -80.26c61.51,2.64 141.08,5.33 238.72,8.01 97.63,2.69 202.63,4 314.95,4 101.68,0 202.64,-1.31 302.95,-4 100.32,-2.68 182.57,-5.37 246.77,-8.01zm2234.87 714.18c235.39,0 419.96,70.88 553.72,212.64 133.75,141.81 200.63,366.5 200.63,674.09l-1384.27 0 -8 -76.25 966.94 0c2.68,-131.07 -8.01,-252.08 -32.07,-363.09 -24.07,-111 -61.56,-199.95 -112.38,-266.82 -50.81,-66.88 -117.69,-100.32 -200.58,-100.32 -115.06,0 -214.69,60.87 -298.95,182.57 -84.25,121.7 -135.75,316.32 -154.45,583.79l12.01 20.06c-2.68,37.44 -5.32,78.25 -8.01,122.38 -2.68,44.13 -4,87.62 -4,130.39 0,184.57 28.07,339.71 84.26,465.45 56.14,125.71 129.7,220.02 220.64,282.84 90.95,62.88 183.26,94.31 276.88,94.31 107.01,0 210.64,-26.75 310.96,-80.25 100.32,-53.5 186.57,-152.45 258.77,-296.9l80.26 32.08c-32.08,90.94 -81.58,180.57 -148.45,268.83 -66.88,88.3 -152.46,159.82 -256.77,214.68 -104.32,54.83 -226.07,82.26 -365.14,82.26 -187.26,0 -350.4,-42.13 -489.53,-126.39 -139.07,-84.25 -246.08,-205.31 -320.96,-363.13 -74.93,-157.82 -112.37,-345.08 -112.37,-561.73 0,-238.07 38.8,-441.34 116.37,-609.9 77.57,-168.51 186.58,-297.58 327.02,-387.15 140.44,-89.63 302.9,-134.44 487.47,-134.44zm1785.53 2880.85c-149.81,0 -288.25,-14.69 -415.28,-44.13 -127.06,-29.39 -228.7,-74.2 -304.95,-134.39 -76.24,-60.19 -114.37,-137.07 -114.37,-230.7 0,-88.31 37.49,-165.87 112.37,-232.75 74.89,-66.83 180.57,-117.7 316.96,-152.45l28.07 64.19c-56.14,24.07 -99.63,62.87 -130.38,116.37 -30.76,53.51 -46.14,112.33 -46.14,176.52 0,117.7 54.83,208.64 164.51,272.88 109.69,64.19 254.14,96.27 433.34,96.27 120.38,0 234.71,-15.38 343.03,-46.13 108.37,-30.76 196.63,-80.94 264.82,-150.46 68.24,-69.56 102.32,-159.18 102.32,-268.82 0,-85.62 -30.75,-157.19 -92.26,-214.69 -61.56,-57.51 -183.26,-86.26 -365.14,-86.26l-280.89 0c-93.58,0 -180.52,-8.01 -260.77,-24.07 -80.25,-16.06 -145.13,-47.49 -194.63,-94.31 -49.45,-46.81 -74.2,-113.01 -74.2,-198.58 0,-96.31 40.13,-187.26 120.38,-272.83 80.25,-85.62 215.33,-169.88 405.22,-252.82l48.18 36.13c-77.57,42.81 -146.45,86.26 -206.64,130.39 -60.19,44.17 -90.3,98.31 -90.3,162.5 0,85.62 61.55,128.39 184.57,128.39l477.46 0c184.57,0 343.76,38.12 477.47,114.37 133.75,76.25 200.63,202.63 200.63,379.15 0,125.75 -40.81,244.08 -122.38,355.13 -81.57,111.01 -203.95,200.59 -367.14,268.83 -163.15,68.2 -367.78,102.27 -613.86,102.27zm24.07 -1608.91c-205.96,0 -379.84,-50.82 -521.6,-152.5 -141.81,-101.64 -212.69,-262.14 -212.69,-481.47 0,-222.01 70.88,-383.84 212.69,-485.47 141.76,-101.68 315.64,-152.5 521.6,-152.5 208.63,0 383.15,50.82 523.59,152.5 140.45,101.63 210.64,263.46 210.64,485.47 0,219.33 -70.19,379.83 -210.64,481.47 -140.44,101.68 -314.96,152.5 -523.59,152.5zm0 -72.25c93.62,0 165.82,-40.12 216.64,-120.38 50.82,-80.25 76.25,-227.33 76.25,-441.34 0,-214.01 -25.43,-361.77 -76.25,-443.35 -50.82,-81.61 -123.02,-122.38 -216.64,-122.38 -88.26,0 -159.14,40.77 -212.65,122.38 -53.5,81.58 -80.25,229.34 -80.25,443.35 0,214.01 26.75,361.09 80.25,441.34 53.51,80.26 124.39,120.38 212.65,120.38zm593.84 -862.67l-72.25 -28.07c37.44,-93.63 101.64,-175.2 192.58,-244.76 90.94,-69.51 185.94,-104.32 284.89,-104.32 74.88,0 134.43,20.75 178.56,62.19 44.13,41.49 66.2,99.64 66.2,174.57 0,82.89 -22.07,141.76 -66.2,176.52 -44.13,34.8 -90.3,52.18 -138.44,52.18 -42.81,0 -82.25,-14.74 -118.37,-44.13 -36.08,-29.44 -56.83,-75.57 -62.19,-138.44 -5.33,-62.88 14.74,-143.77 60.19,-242.76l44.12 16.06c-106.95,42.81 -185.2,87.62 -234.7,134.39 -49.5,46.81 -94.27,109 -134.39,186.57zm1725.29 -337.02c235.39,0 419.96,70.88 553.71,212.64 133.76,141.81 200.64,366.5 200.64,674.09l-1384.27 0 -8.01 -76.25 966.95 0c2.68,-131.07 -8.01,-252.08 -32.08,-363.09 -24.06,-111 -61.55,-199.95 -112.37,-266.82 -50.82,-66.88 -117.69,-100.32 -200.59,-100.32 -115.05,0 -214.68,60.87 -298.94,182.57 -84.26,121.7 -135.76,316.32 -154.45,583.79l12.01 20.06c-2.69,37.44 -5.33,78.25 -8.01,122.38 -2.69,44.13 -4,87.62 -4,130.39 0,184.57 28.07,339.71 84.25,465.45 56.14,125.71 129.71,220.02 220.65,282.84 90.94,62.88 183.25,94.31 276.88,94.31 107,0 210.64,-26.75 310.96,-80.25 100.31,-53.5 186.57,-152.45 258.77,-296.9l80.25 32.08c-32.07,90.94 -81.57,180.57 -148.45,268.83 -66.87,88.3 -152.45,159.82 -256.77,214.68 -104.32,54.83 -226.06,82.26 -365.14,82.26 -187.25,0 -350.4,-42.13 -489.52,-126.39 -139.08,-84.25 -246.08,-205.31 -320.96,-363.13 -74.93,-157.82 -112.38,-345.08 -112.38,-561.73 0,-238.07 38.81,-441.34 116.38,-609.9 77.57,-168.51 186.57,-297.58 327.01,-387.15 140.45,-89.63 302.91,-134.44 487.48,-134.44zm2419.49 0c107.01,0 194.58,14.06 262.78,42.13 68.24,28.11 125.06,66.19 170.56,114.37 48.13,50.82 82.25,116.33 102.32,196.58 20.06,80.25 30.07,188.58 30.07,325.02l0 1075.31c0,112.32 22.06,188.57 66.19,228.7 44.13,40.12 118.38,60.19 222.7,60.19l0 84.25c-45.45,-2.68 -116.38,-6 -212.64,-10.01 -96.31,-4.04 -191.26,-6.05 -284.89,-6.05 -90.94,0 -181.2,2.01 -270.83,6.05 -89.62,4.01 -157.14,7.33 -202.63,10.01l0 -84.25c90.94,0 155.13,-20.07 192.58,-60.19 37.48,-40.13 56.18,-116.38 56.18,-228.7l0 -1187.64c0,-77.61 -6.69,-147.81 -20.06,-210.69 -13.38,-62.82 -41.45,-113.64 -84.26,-152.45 -42.81,-38.81 -107,-58.19 -192.58,-58.19 -149.81,0 -272.19,61.51 -367.14,184.58 -94.94,123.06 -142.44,275.51 -142.44,457.4l0 966.99c0,112.32 19.38,188.57 58.19,228.7 38.8,40.12 102.31,60.19 190.57,60.19l0 84.25c-42.81,-2.68 -107.64,-6 -194.58,-10.01 -86.94,-4.04 -177.2,-6.05 -270.83,-6.05 -90.94,0 -185.93,2.01 -284.88,6.05 -99,4.01 -172.52,7.33 -220.7,10.01l0 -84.25c104.32,0 178.57,-20.07 222.7,-60.19 44.13,-40.13 66.19,-116.38 66.19,-228.7l0 -1259.89c0,-120.37 -20.06,-209.32 -60.19,-266.82 -40.12,-57.51 -116.33,-86.26 -228.7,-86.26l0 -84.26c85.62,8.01 168.51,12.01 248.77,12.01 90.94,0 175.88,-4.64 254.81,-14.01 78.89,-9.37 151.77,-23.43 218.65,-42.13l0 437.34c69.56,-165.82 165.19,-282.2 286.89,-349.08 121.7,-66.87 250.76,-100.31 387.2,-100.31zm2900.92 -1019.13l0 2708.34c0,120.38 20.75,209.32 62.19,266.83 41.45,57.5 117.01,86.26 226.7,86.26l0 84.25c-82.93,-8 -165.83,-12.05 -248.76,-12.05 -90.95,0 -175.88,4.05 -254.77,12.05 -78.94,8.01 -151.82,22.75 -218.69,44.13l0 -2708.34c0,-120.38 -20.75,-209.32 -62.2,-266.82 -41.44,-57.51 -117.01,-86.26 -226.7,-86.26l0 -84.26c85.63,8.01 168.52,12.06 248.77,12.06 88.26,0 172.51,-4.69 252.77,-14.06 80.25,-9.37 153.81,-23.43 220.69,-42.13zm-902.79 1019.13c117.69,0 225.38,25.43 323.01,76.25 97.63,50.81 166.51,136.39 206.63,256.77l-48.13 44.13c-37.44,-96.27 -92.31,-166.51 -164.51,-210.64 -72.24,-44.13 -153.81,-66.2 -244.76,-66.2 -152.5,0 -276.88,80.94 -373.15,242.76 -96.31,161.83 -143.12,411.27 -140.44,748.3 0,222.01 18.75,403.22 56.19,543.66 37.44,140.44 92.94,244.08 166.51,310.95 73.56,66.88 162.51,100.32 266.82,100.32 104.32,0 198.59,-44.13 282.84,-132.39 84.26,-88.3 134.44,-215.32 150.5,-381.2l36.08 84.26c-26.75,181.89 -90.95,321.69 -192.58,419.32 -101.64,97.63 -238.07,146.45 -409.27,146.45 -163.14,0 -306.95,-39.49 -431.33,-118.38 -124.39,-78.89 -220.02,-199.26 -286.85,-361.09 -66.87,-161.87 -100.31,-365.82 -100.31,-611.9 0,-243.4 40.76,-446.03 122.38,-607.85 81.57,-161.87 190.57,-282.89 326.97,-363.14 136.44,-80.26 287.57,-120.38 453.4,-120.38zm1917.91 2154.62c-176.52,0 -304.27,-44.76 -383.15,-134.39 -78.94,-89.62 -118.38,-203.95 -118.38,-343.07 0,-115.01 26.75,-208.64 80.25,-280.84 53.5,-72.25 122.38,-131.75 206.64,-178.57 84.25,-46.81 173.88,-86.94 268.83,-120.38 94.94,-33.43 184.57,-65.51 268.82,-96.26 84.26,-30.8 153.82,-66.24 208.64,-106.37 54.82,-40.08 82.26,-90.94 82.26,-152.45l0 -272.83c0,-96.31 -15.38,-173.2 -46.14,-230.71 -30.75,-57.5 -72.24,-98.31 -124.38,-122.38 -52.18,-24.06 -114.37,-36.12 -186.57,-36.12 -61.55,0 -127.07,8.69 -196.63,26.07 -69.56,17.38 -124.38,51.5 -164.51,102.32 58.87,16.06 107.69,47.49 146.45,94.31 38.81,46.81 58.19,105 58.19,174.51 0,74.93 -24.75,133.76 -74.25,176.57 -49.45,42.81 -111.64,64.19 -186.57,64.19 -82.89,0 -144.45,-26.07 -184.53,-78.25 -40.13,-52.14 -60.19,-113.01 -60.19,-182.57 0,-72.2 18.06,-131.07 54.14,-176.52 36.12,-45.49 83.62,-88.3 142.44,-128.38 64.2,-42.81 146.45,-78.94 246.77,-108.37 100.31,-29.39 212,-44.13 335.02,-44.13 115.05,0 214.69,12.69 298.94,38.12 84.26,25.43 154.46,66.2 210.64,122.38 66.88,61.51 111.01,138.44 132.39,230.71 21.43,92.31 32.12,203.95 32.12,335.02l0 1107.43c0,64.19 8.01,111.01 24.07,140.44 16.06,29.39 45.49,44.13 88.26,44.13 32.12,0 61.55,-8.05 88.3,-24.07 26.75,-16.06 53.46,-34.8 80.21,-56.18l40.13 68.19c-56.14,45.5 -113.01,81.58 -170.52,108.33 -57.5,26.75 -130.38,40.12 -218.64,40.12 -147.13,0 -244.13,-34.75 -290.9,-104.32 -46.81,-69.51 -71.56,-149.76 -74.24,-240.71 -77.57,131.07 -169.2,221.33 -274.84,270.83 -105.68,49.45 -218.69,74.2 -339.07,74.2zm220.7 -192.58c69.56,0 137.75,-19.38 204.63,-58.18 66.88,-38.76 129.71,-105 188.58,-198.59l0 -798.47c-37.45,56.18 -94.31,101.63 -170.52,136.44 -76.25,34.75 -153.81,72.88 -232.75,114.32 -78.89,41.45 -146.44,97 -202.59,166.51 -56.18,69.56 -84.25,165.88 -84.25,288.89 0,120.38 28.07,208.64 84.25,264.83 56.15,56.18 127.03,84.25 212.65,84.25zm2559.89 -1962.04c77.57,0 143.76,16.06 198.58,48.18 54.87,32.07 96.31,72.88 124.38,122.33 28.12,49.5 42.13,105 42.13,166.51 0,77.62 -23.38,143.81 -70.2,198.63 -46.81,54.82 -109,82.26 -186.57,82.26 -66.88,0 -123.7,-20.07 -170.51,-60.19 -46.82,-40.13 -70.25,-94.95 -70.25,-164.51 0,-58.83 15.38,-109.01 46.18,-150.45 30.75,-41.45 66.19,-74.25 106.32,-98.32 -26.75,-21.38 -58.87,-30.75 -96.31,-28.07 -96.31,5.33 -181.21,44.82 -254.77,118.38 -73.57,73.52 -131.75,162.46 -174.56,266.78 -42.77,104.32 -64.2,200.63 -64.2,288.89l0 922.86c0,131.07 36.13,218.69 108.33,262.82 72.24,44.13 172.56,66.2 300.94,66.2l0 84.25c-61.51,-2.68 -149.13,-6 -262.82,-10.01 -113.69,-4.04 -233.39,-6.05 -359.09,-6.05 -96.31,0 -192.58,2.01 -288.89,6.05 -96.31,4.01 -169.88,7.33 -220.69,10.01l0 -84.25c104.31,0 178.56,-20.07 222.69,-60.19 44.13,-40.13 66.2,-116.38 66.2,-228.7l0 -1259.89c0,-120.37 -20.07,-209.32 -60.19,-266.82 -40.13,-57.51 -116.33,-86.26 -228.7,-86.26l0 -84.26c85.62,8.01 168.51,12.01 248.76,12.01 90.94,0 175.88,-4.64 254.82,-14.01 78.88,-9.37 151.77,-23.43 218.64,-42.13l0 461.41c32.12,-77.57 74.89,-152.45 128.39,-224.7 53.5,-72.2 117.69,-131.7 192.62,-178.52 74.89,-46.81 157.82,-70.24 248.77,-70.24zm1003.11 -954.93c82.89,0 152.45,26.07 208.64,78.25 56.14,52.13 84.25,117.01 84.25,194.58 0,77.57 -28.11,142.44 -84.25,194.62 -56.19,52.14 -125.75,78.21 -208.64,78.21 -82.94,0 -152.5,-26.07 -208.69,-78.21 -56.14,-52.18 -84.25,-117.05 -84.25,-194.62 0,-77.57 28.11,-142.45 84.25,-194.58 56.19,-52.18 125.75,-78.25 208.69,-78.25zm240.71 966.98l0 1741.36c0,112.32 22.06,188.57 66.19,228.7 44.13,40.12 118.38,60.19 222.7,60.19l0 84.25c-45.45,-2.68 -115.69,-6 -210.64,-10.01 -94.95,-4.04 -191.94,-6.05 -290.89,-6.05 -93.63,0 -189.94,2.01 -288.89,6.05 -99,4.01 -172.52,7.33 -220.7,10.01l0 -84.25c104.32,0 178.57,-20.07 222.7,-60.19 44.13,-40.13 66.19,-116.38 66.19,-228.7l0 -1259.89c0,-120.37 -20.06,-209.32 -60.19,-266.82 -40.12,-57.51 -116.33,-86.26 -228.7,-86.26l0 -84.26c85.62,8.01 168.51,12.01 248.77,12.01 90.94,0 175.88,-4.64 254.81,-14.01 78.89,-9.37 151.77,-23.43 218.65,-42.13zm2363.26 0l0 1681.17c0,120.38 20.75,209.32 62.19,266.82 41.49,57.51 117.06,86.26 226.7,86.26l0 84.26c-82.89,-8.01 -165.82,-12.01 -248.76,-12.01 -88.26,0 -172.52,4 -252.77,12.01 -80.25,8.05 -153.82,22.74 -220.69,44.13l0 -437.34c-66.88,160.5 -159.83,274.83 -278.84,343.07 -119.06,68.2 -244.08,102.32 -375.15,102.32 -98.99,0 -183.25,-14.06 -252.81,-42.13 -69.52,-28.11 -127.02,-64.87 -172.52,-110.37 -48.13,-53.5 -81.57,-122.38 -100.31,-206.64 -18.7,-84.25 -28.07,-190.57 -28.07,-318.96l0 -1011.12c0,-120.37 -20.07,-209.32 -60.19,-266.82 -40.13,-57.51 -116.38,-86.26 -228.7,-86.26l0 -84.26c85.57,8.01 168.51,12.01 248.76,12.01 88.26,0 172.52,-4.64 252.77,-14.01 80.25,-9.37 153.82,-23.43 220.69,-42.13l0 1604.92c0,77.57 5.33,148.49 16.06,212.69 10.69,64.19 36.08,115.01 76.21,152.45 40.12,37.44 104.31,56.18 192.62,56.18 139.08,0 255.45,-61.55 349.03,-184.57 93.63,-123.06 140.45,-274.19 140.45,-453.4l0 -906.8c0,-120.37 -20.07,-209.32 -60.19,-266.82 -40.13,-57.51 -116.33,-86.26 -228.7,-86.26l0 -84.26c85.62,8.01 168.51,12.01 248.76,12.01 88.31,0 172.56,-4.64 252.81,-14.01 80.21,-9.37 153.78,-23.43 220.65,-42.13zm1849.68 -12.05c101.68,0 187.25,14.06 256.81,42.13 69.56,28.11 125.71,66.19 168.52,114.37 48.13,50.82 81.57,118.33 100.31,202.63 18.7,84.26 28.07,190.58 28.07,318.97l0 1075.31c0,112.32 21.43,188.57 64.19,228.7 42.81,40.12 115.01,60.19 216.7,60.19l0 84.25c-45.5,-2.68 -115.7,-6 -210.64,-10.01 -95,-4.04 -187.94,-6.05 -278.89,-6.05 -90.94,0 -179.88,2.01 -266.82,6.05 -86.94,4.01 -153.14,7.33 -198.59,10.01l0 -84.25c88.26,0 150.45,-20.07 186.58,-60.19 36.07,-40.13 54.14,-116.38 54.14,-228.7l0 -1187.64c0,-77.61 -5.33,-147.81 -16.06,-210.69 -10.7,-62.82 -35.44,-113.64 -74.21,-152.45 -38.8,-38.81 -99.63,-58.19 -182.57,-58.19 -93.62,0 -177.2,28.12 -250.76,84.26 -73.57,56.19 -132.44,133.07 -176.57,230.7 -44.13,97.63 -66.19,206.64 -66.19,327.02l0 966.99c0,112.32 18.74,188.57 56.18,228.7 37.45,40.12 98.96,60.19 184.58,60.19l0 84.25c-42.81,-2.68 -107.01,-6 -192.63,-10.01 -85.57,-4.04 -173.83,-6.05 -264.78,-6.05 -90.94,0 -185.93,2.01 -284.88,6.05 -99,4.01 -172.52,7.33 -220.7,10.01l0 -84.25c104.32,0 178.57,-20.07 222.7,-60.19 44.13,-40.13 66.19,-116.38 66.19,-228.7l0 -1259.89c0,-120.37 -20.06,-209.32 -60.19,-266.82 -40.12,-57.51 -116.33,-86.26 -228.7,-86.26l0 -84.26c85.62,8.01 168.51,12.01 248.77,12.01 90.94,0 175.88,-4.64 254.81,-14.01 78.89,-9.37 151.77,-23.43 218.65,-42.13l0 437.34c69.56,-160.5 162.51,-275.51 278.88,-345.07 116.33,-69.52 238.71,-104.32 367.1,-104.32zm1207.74 0c101.64,0 187.26,14.06 256.77,42.13 69.56,28.11 125.75,66.19 168.52,114.37 48.17,50.82 81.61,118.33 100.31,202.63 18.74,84.26 28.12,190.58 28.12,318.97l0 1075.31c0,112.32 22.06,188.57 66.19,228.7 44.13,40.12 118.33,60.19 222.7,60.19l0 84.25c-45.5,-2.68 -116.38,-6 -212.69,-10.01 -96.27,-4.04 -191.26,-6.05 -284.89,-6.05 -90.94,0 -179.88,2.01 -266.78,6.05 -86.94,4.01 -153.18,7.33 -198.63,10.01l0 -84.25c88.26,0 150.45,-20.07 186.58,-60.19 36.12,-40.13 54.18,-116.38 54.18,-228.7l0 -1187.64c0,-77.61 -5.37,-147.81 -16.06,-210.69 -10.69,-62.82 -36.12,-113.64 -76.25,-152.45 -40.12,-38.81 -103,-58.19 -188.57,-58.19 -139.08,0 -256.14,62.19 -351.08,186.58 -94.95,124.38 -142.45,277.51 -142.45,459.4l-16.06 -333.02c72.25,-176.52 169.2,-296.9 290.89,-361.09 121.75,-64.19 248.13,-96.31 379.2,-96.31z"/>
    	</svg>   
    </LogoBlock>
  ); 
};

export default LogoBlck;