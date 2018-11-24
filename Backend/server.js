import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Task from './models/Task';
import User from './models/NewUser';


const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

mongoose.connect('mongodb://customer:customer1234@ds123372.mlab.com:23372/tasks_db', 
{ useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB Welcome!');
});

router.route('/tasks').get((req, res) => {
    Task.find((err, tasks) => {
        res.json(tasks);
    });
});

router.route('/tasks/add').post((req, res) => {
    let task = new Task(req.body);
    task.save()
    .then(task => res.json(task))
});

router.route('/tasks/:id').get((req, res) => {
    Task.findById(req.params.id, (err, task) => {
        res.json(task);
    })
});

router.route('/tasks/get/:userId').get((req, res) => {
    Task.find({'userId' : req.params.userId}, (err, task) => {
        res.json(task);
    });
});

router.route('/tasks/update/:id').post((req, res) => {
    Task.findById(req.params.id, (err, task) => {
        task.text = req.body.text;
        task.userName = req.body.userName;
        task.userId = req.body.userId;
        task.status = req.body.status;
        task.sort = req.body.sort;
        task.create = req.body.create;
        task.save()
        .then(task => {
            res.json('Update done');
        })
    });
});

router.route('/tasks/delete/:id').get((req, res) => {
    Task.findByIdAndRemove({_id: req.params.id}, (err, tasks) => {
        if (err)
            res.json(err);
        else
            res.json("Delete done");
    });
});

router.route('/users/add').post((req, res) => {
    let user = new User(req.body);
    user.save()
    .then(User => res.json(User))
});

router.route('/users').get((req, res) => {
    User.find((err, users) => {
        res.json(users);
    });
});

app.use('/', router);

app.listen(3800, () => console.log('listening on 3800'));

