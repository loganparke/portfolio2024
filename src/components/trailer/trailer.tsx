import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import '../../App.css'; // Import CSS for the trailer styling

interface TrailerComponentProps {}

const TrailerComponent = forwardRef<HTMLDivElement, TrailerComponentProps>((props, ref) => {
  const localRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  // Use the ref provided by the parent or fallback to the localRef
  useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let trailerX = 0;
    let trailerY = 0;
    const speed = 0.1; // Speed factor to control the trailing effect

    // Handler to capture mouse movements
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    // Animation function to update the position of the trailer
    const animate = () => {
      if (localRef.current) {
        const dx = mouseX - trailerX;
        const dy = mouseY - trailerY;
        trailerX += dx * speed;
        trailerY += dy * speed;
        localRef.current.style.transform = `translate(${trailerX - localRef.current.clientWidth / 2}px, ${trailerY - localRef.current.clientHeight / 2}px)`;
      }
      // Continue the animation loop
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Handle visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Pause animation when the document is hidden
        if (animationFrameId.current !== null) {
          cancelAnimationFrame(animationFrameId.current);
        }
      } else {
        // Resume animation when the document becomes visible again
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    // Start the animation loop
    animationFrameId.current = requestAnimationFrame(animate);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); // Empty dependency array ensures this runs once after initial render

  return <div id="trailer" ref={localRef} className="trailer trailerOutBtn"></div>;
});

export default TrailerComponent;


// const TrailerComponent: React.FC = () => {
//   const trailer = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//       let mouseX = 0;
//       let mouseY = 0;
//       let trailerX = 0;
//       let trailerY = 0;
//       const speed = 0.1; // Speed factor to control the trailing effect

//       const handleMouseMove = (event: MouseEvent) => {
//           mouseX = event.clientX;
//           mouseY = event.clientY;
//       };

//       const animate = () => {
//           if (trailer.current) {
//               // Calculate the position difference
//               const dx = mouseX - trailerX;
//               const dy = mouseY - trailerY;

//               // Update the trailer position with a smoothing effect
//               trailerX += dx * speed;
//               trailerY += dy * speed;

//               // Set the new position centered over the cursor
//               trailer.current.style.transform = `translate(${trailerX - trailer.current.clientWidth / 2}px, ${trailerY - trailer.current.clientHeight / 2}px)`;
//           }

//           requestAnimationFrame(animate);
//       };

//       document.addEventListener('mousemove', handleMouseMove);
//       requestAnimationFrame(animate);

//       return () => {
//           document.removeEventListener('mousemove', handleMouseMove);
//       };
//   }, []);

//   return <div id="trailer" ref={trailer} className="trailer"></div>;
// };

// export default TrailerComponent;