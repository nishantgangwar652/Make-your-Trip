const express=require("express");
const router=express.Router({ mergeParams: true });
const wrapAsync=require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewcontroller=require("../controllers/reviews.js");
// post review

router.post("/",isLoggedIn,validateReview,wrapAsync(reviewcontroller.postReview));
// delete review
router.delete(
    "/:reviewId",isLoggedIn,isReviewAuthor,
    wrapAsync(reviewcontroller.deleteReview)
);
module.exports=router;
