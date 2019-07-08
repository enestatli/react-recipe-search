import React from 'react'

import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'

export default function RecipeList({recipes}) {
  return (
    <>
    	<RecipeSearch></RecipeSearch>
    	<div className="container my-5">
    		<div className="row">
    			<div className="col-10-mx-auto col-md-6 text-center text-uppercase mb-3">
    				<h1 className="text-slanned text-center">Recipe List</h1>
    			</div>
    		</div>
    		<div className="row">
    			{recipes.map((recipe, i) => {
    				return <Recipe key={i} recipe={recipe} />
    			})}
    		</div>
    	</div>
    </>
  )
}
