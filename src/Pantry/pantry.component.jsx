import './pantry.styles.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { animateScroll as scroll } from 'react-scroll';
import Title from '../Screenshots/pantry_main.png';
import PantryPage from '../Screenshots/pantry_pantry_filled.png';
import RecipeList from '../Screenshots/pantry_recipes.png';
import RecipeTop from '../Screenshots/pantry_recipe_page_top.png';
import RecipeBottom from '../Screenshots/pantry_recipe_page_bottom.png';
import Login from '../Screenshots/pantry_login.png';
import Grocery from '../Screenshots/pantry_groceries.png';
import FoodLog from '../Screenshots/pantry_food_log.png';
import Favorites from '../Screenshots/pantry_favorites.png';
import MobileTitle from '../Screenshots/pantry_mobile_main.png';
import MobilePantry from '../Screenshots/pantry_mobile_pantry_filled.png';
import MobileRecipes from '../Screenshots/pantry_mobile_recipes.png';
import MobileRecipeTop from '../Screenshots/pantry_mobile_recipe_page_top.png';
import MobileRecipeBottom from '../Screenshots/pantry_mobile_recipe_page_bottom.png';
import MobileLogin from '../Screenshots/pantry_mobile_login.png';
import MobileFoodLog from '../Screenshots/pantry_mobile_food_log.png';
import MobileFavorites from '../Screenshots/pantry_mobile_favorites.png';
import MobileGrocery from '../Screenshots/pantry_mobile_grocery.png';
import MobileNutrition from '../Screenshots/pantry_mobile_nutrition.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../Carousel/carousel.component';

const Pantry = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <div className='overlay-page'>
            <div className='pantry-content'>
                <div className='pantry-nav'>
                    <div className='pantry-logo' onClick={scrollToTop}>
                        <span>MT.</span>
                    </div>
                    <div className='return-two'>
                        <Link to='/'><button>{'< Return'}</button></Link>
                    </div>
                </div>
                <div className='pantry-blog-title animate__animated animate__fadeInDown'>
                    <span>Pantry <FontAwesomeIcon icon={faDrumstickBite} /></span>
                </div>
                <div className='pantry-blog-subtitle animate__animated animate__fadeInDown'>
                    <p>A full-stack website that generates recipes based on items in your pantry. Includes a customizable nutrition tracker, food log and grocery list.</p>
                </div>
                <div className='pantry-screenshots animate__animated animate__fadeInUp'>
                    <Carousel>
                        <div className='carousel'>
                            <div className='pantry-image-container'><img src={`${window.innerWidth > 480 ? Title : MobileTitle}`} alt='title-page' /></div>
                            <div className='caption'><p>Title Page</p></div>
                        </div>
                        <div className='carousel'>
                            <div className='pantry-image-container'><img src={`${window.innerWidth > 480 ? PantryPage : MobilePantry}`} alt='pantry' /></div>
                            <div className='caption'><p>Pantry</p></div>
                        </div>
                        <div className='carousel'>
                            <div className='pantry-image-container'><img src={`${window.innerWidth > 480 ? RecipeList : MobileRecipes}`} alt='recipe-list' /></div>
                            <div className='caption'><p>Recipe List</p></div>
                        </div>
                        <div className='carousel'>
                            <div className='pantry-image-container'><img src={`${window.innerWidth > 480 ? RecipeTop : MobileRecipeTop}`} alt='recipe-details-top' /></div>
                            <div className='caption'><p>Recipe Details Pt. 1</p></div>
                        </div>
                        <div className='carousel'>
                            <div className='pantry-image-container'><img src={`${window.innerWidth > 480 ? RecipeBottom : MobileRecipeBottom}`} alt='recipe-details-bottom' /></div>
                            <div className='caption'><p>Recipe Details Pt. 2</p></div>
                        </div>
                        <div className='carousel'>
                            <div className='pantry-image-container'><img src={`${window.innerWidth > 480 ? Grocery : MobileGrocery}`} alt='grocery-list' /></div>
                            <div className='caption'><p>Grocery List</p></div>
                        </div>
                        <div className='carousel'>
                            <div className='pantry-image-container'><img src={`${window.innerWidth > 480 ? FoodLog : MobileFoodLog}`} alt='food-log' /></div>
                            <div className='caption'><p>Food Log</p></div>
                        </div>
                        <div className='carousel' style={{display: `${window.innerWidth > 480 ? 'none' : 'flex'}`}}>
                            <div className='pantry-image-container'><img src={MobileNutrition} alt='food-log' /></div>
                            <div className='caption'><p>Food Log</p></div>
                        </div>
                        <div className='carousel'>
                            <div className='pantry-image-container'><img src={`${window.innerWidth > 480 ? Favorites : MobileFavorites}`} alt='favorites' /></div>
                            <div className='caption'><p>Favorites</p></div>
                        </div>
                        <div className='carousel'>
                            <div className='pantry-image-container'><img src={`${window.innerWidth > 480 ? Login : MobileLogin}`} alt='login' /></div>
                            <div className='caption'><p>Login</p></div>
                        </div>
                    </Carousel>
                </div>
                <AnimationOnScroll animateIn='animate__fadeInLeft'>
                    <div className='pantry-paragraphs'>
                        <p><a href={'https://mtojong246.github.io/pantry-app/'} target="_blank" rel="noopener noreferrer">Pantry</a> was a challenging project that helped me to further expand my knowledge of managing local and global state while working with public APIs. </p>
                        <p>Users can begin by adding items to their “pantry”, which subsequently filters a list of recipes that include those ingredients. From there, the user has the option to further filter these recipes based on certain dietary restrictions, preferences and total cook times. Within each recipe contains nutritional information that users can interact with, such as adding a serving of the dish to their food log. It also highlights the ingredients that a user doesn’t have in their pantry, allowing them to add such items to their grocery list if necessary.</p>
                        <p>The front-end was built using React functional components to manipulate the data fetched from the Edamam API. For user authentication and data storage, the back-end was built using an Express server and PostgreSQL database.</p>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInRight'>
                    <div className='pantry-paragraphs animate__animated animate__flipInX'>
                        <p>With this project, I was challenged to frequently consider how changing the state of one component would impact all of the others. For example, any changes to the food log would then be reflected on the nutrient tracker, so by changing the quantity of a certain item, the nutrient tracker should respond accordingly by subtracting or adding the corresponding amount of macronutrients. To achieve this, the nutrient tracker had to somehow remember the previous quantity that the food item was set to. This was done by creating a “previous quantity” object, which served to store the original quantity of the item every time it was updated. The nutrient tracker was then programmed to reflect <a href={'https://github.com/mtojong246/pantry-app/blob/master/src/modals/Log-Quantity-Modal/log-quantity-modal.component.jsx'} target="_blank" rel="noopener noreferrer">these changes</a> (Lines 16-68).</p>
                        <p>Despite being simple arithmetic, this unravelment really showed me one of the many ways in which programmers rely on innovation to solve certain problems. Although my method might not have been the cleanest approach, it did provide a stepping stone toward a better solution in the future. This to me is what makes science and programming so exciting, and I look forward to discovering new ways of solving unique problems in the future.</p>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    )
}

export default Pantry;