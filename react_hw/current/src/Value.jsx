import React, { useRef, useEffect } from 'react';

export default function ValueDisplay({ value }) {
  const prevValueRef = useRef('');

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return (
    <div>
      <p>Current Value: {value}</p>
      <p>Previous Value: {prevValueRef.current}</p>
    </div>
  );
}
