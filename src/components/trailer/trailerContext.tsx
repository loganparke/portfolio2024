import React, { createContext, useRef, RefObject } from 'react';

// Define the context type
interface TrailerContextType {
  trailer: RefObject<HTMLDivElement>;
}

// Create the context with a default value
const trailer = createContext<TrailerContextType | null>(null);

export default trailer;