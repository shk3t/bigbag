import React from "react";

export default function ProductField({ label, field }) {
  return (
    <p>
      <span className="product-about__category">{label}:&nbsp;</span>
      {field}
    </p>
  );
}
