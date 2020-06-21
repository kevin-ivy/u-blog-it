const router = require('express').Router();
const { Comment } = require('../../models');

//Get all comments
router.get('/', (req, res) => {
    console.log(`=====================`);
    Comment.findAll({
        attributes: [
            'id',
            'comment_text',
            'user_id',
            'post_id'
        ],
        order: [['created_at', 'DESC']]
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });

//Get comments for Post ID
router.get('/:id', (req, res) => {
    Comment.findAll({
        where: {
            post_id: req.params.id
        }
    })
        .then(dbCommentData => {
          if (!dbCommentData) {
              return;
          }  
          res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

//Create new comments
router.post('/', (req, res) => {
    // check the session
    if (req.session) {
      Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        // use the id from the session
        user_id: req.session.user_id
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    }
  });

//Delete individual comments
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(400).json({message: 'No post found with this id'});
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;