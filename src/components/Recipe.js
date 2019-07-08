import React, {useState} from 'react'

export default function Recipe({recipe}) {
	const {image_url, publisher, title, recipe_id} = recipe
	const [showInfo, setShowInfo] = useState(false)
	const [recipeDetails, setRecipeDetails] = useState([])
	const {ingredients, social_rank} = recipeDetails
	const [buttonName, setButtonName] = useState("More Info")

	const handleShowInfo = async (e) => {
		const {id} = e.target.dataset
		const response = await fetch(`https://www.food2fork.com/api/get?key=45cd7b9c139ab2ff7c03ef054c474ffe&rId=${id}`)
		const {recipe} = await response.json()
		setRecipeDetails(recipe)
		setShowInfo(!showInfo)
		!showInfo ? setButtonName("Collapse") : setButtonName("More Info")
	}

  return (
    <>
    	<div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
    		<div className="card">
    			<img src={image_url} alt="recipe" className="img-card-top" style={{height:"14rem"}} />
    			<div className="card-body text-capitalize">
    				<h6>{title}</h6>
    				<h6 className="text-warning">
    					Provided by: {publisher}
    				</h6>
    			</div>
    			<div className="card-footer">
    				<button type="button" style={{margin:"13px"}} className="btn btn-primary text-center" data-id={recipe_id} onClick={handleShowInfo}>{buttonName}</button>
    				{showInfo && 
    					<button key={recipe_id} type="button" style={{margin:"13px"}} className="btn btn-success text-center font-weight-bold">{social_rank}</button>
    				}
    				{showInfo ?
    					ingredients.map((i, index) => {
    						return <ul key={index} className="list-group" style={{marginLeft:"20px"}}>
    							<li className="list-group-items">{i}</li>
    						</ul>
    					}) : null
    				}
    			</div>
    		</div>
    	</div>
    </>
  )
}


