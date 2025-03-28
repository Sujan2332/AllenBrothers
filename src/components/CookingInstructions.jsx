// File: ProductDetails.js
import React from "react";
import {productData} from "../assets/data";

const ProductDetails = () => {
  const { title, description, cookingInstructions } = productData;
  const { filetMignon } = cookingInstructions;

  return (
    <div className="d-flex flex-column gap-2 align-items-start justify-content-center">
      <h2 className="text-primary">{title}</h2>
      <p>{description}</p>

      <h3 className="text-primary">Cooking Instructions: Filet Mignon</h3>
      <p>
        <strong>{filetMignon.weight}</strong> | Serving Size: {filetMignon.servingSize}
      </p>

      {Object.values(filetMignon.methods).map((method, index) => (
        <div key={index}>
          <h4>{method.title}</h4>
          <ol>
            {method.steps.map((step, stepIndex) => (
              <li key={stepIndex}>{step}</li>
            ))}
          </ol>
        </div>
      ))}
<span className="pb-4">
      See our <a href="/">Cooking Guides</a> for eveyrthing you need to know about ordering, storing, and cooking <br />
      </span>
      <button className="btn border-secondary text-primary d-block w-100 d-flex flex-row justify-content-between align-items-center fs-5 fw-medium">Nutritional Info <i class="fa-solid fa-angle-down text-muted"></i></button>
    </div>
  );
};

export default ProductDetails;
