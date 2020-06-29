import {Router} from "express";
import Subscribers from "../model/subscribers";

const router = Router();

//@route api/subscribers
//@desc get all subscribers
//@access Private

router.get('/', async (req, res) => {
    try{
        const subscriber = await Subscribers.find();
        if(!subscriber)throw Error ("No Users want Newsletter");
        res.status(200).json(subscriber)
    }catch(e){
        res.status(400).json({msg: e.message})
    }
});

//@route api/subscriber
//@desc post new Subscriber
//@access Public

router.post('/', async (req, res) => {
    const newsub = new Subscribers(req.body);

    try {
        const newSubscriber = await newsub.save();
        if(!newSubscriber) throw Error("Something went wrong with adding new subscriber")
        res.status(200).json(newSubscriber);
    }catch(e){
        res.status(400).json({msg: e.message})
    }
});

//@route api/subscriber/:id
//@desc update subscriber
//@access Public
router.put('/:id', async (req, res) => {
    Subscribers.findById(req.params.id)
    .then(sub => {
        sub.update(req.body)    
        .then(update => {
            res.json({message: "Updated Record"})
        })
        .catch(err => {
            res.status(500).json(err)
        })
}).catch(err => {
    res.status(500).json({msg: "There was an error updating Subscriber"})
})
});

//@route api/subscriber/:id
//@desc delete subscriber
//@access Public

router.delete('/:id', (req, res) => {
    Subscribers
    .findById(req.params.id)
    .then(sub => {
        
        sub.remove()
        .then(() => {
            res.json({message: "Subscriber deleted"})
        })
        .catch(err => {
            
            res.status(404).json(err)
        })
    })
    .catch(err => {
        res.status(500).json({msg: "There was an error deleting Subscriber"})
    })
 })

 module.exports = router;