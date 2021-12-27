// var createError = require('http-errors');
const express = require('express'),
  path        = require('path'),
  mongoose    = require('mongoose'),
  cors        = require('cors'),
  indexRouter = require('./routes/index'),
  usersRouter = require('./routes/users'),
  authRouter  = require('./routes/auth'),
  adminRouter = require('./routes/admin'),
  consversationRouter = require('./routes/conversations'),
  messageRouter       = require('./routes/messages'),
  userProfileRoutes   = require('./routes/user-profile'),
  feedsRouter = require('./routes/feed'),
  auth        = require('./middleware/auth');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// For importing credentials and private keys
require('dotenv').config();

// Creating express app
const app = express();

// Using json object readability
app.use(express.json());

// Ensuring jwt private key in the system.
// if(!process.env.WC_jwtPrivateKey){
//   console.error('FATAL ERROR: jwtPrivateKey is not defined');
//   process.exit(1);
// }

//databases connection
// const uri  = `mongodb+srv://${process.env.Database_Username}:${process.env.Database_Password}@cluster0.jg9l3.mongodb.net/WC-Storage?retryWrites=true&w=majority`;
// `mongodb+srv://${process.env.Database_Username}:${process.env.Database_Password}@cluster0.3vlbl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const uri = process.env.new_db;
const connectDB = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Failed to connect...' + err));
};

// use as a function        
connectDB();

// app.use(logger('dev'));
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// Allowing cross origin requests
app.use(cors());

// Contains route to get token from login credentials
app.use('/auth', authRouter);

// Using jwt auth for every route below
// app.use(auth);

// Contains search query routes
app.use('/', indexRouter);
// Contains single and multi user CRUD & mail verification.
app.use('/users', usersRouter);
// I don't know what it contains
app.use('/conversations', consversationRouter);
// And this on too
app.use('/messages', messageRouter);
// Routes for feeds CRUD
app.use('/feeds', feedsRouter);
// Routes for user profile CRUD
app.use('/userProfile', userProfileRoutes);
// Routes for admin
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// Listening on server port OR port no 5000
const port = process.env.PORT || 5000;
app.listen(port, ()=> {
    console.log(`Server is running on ${port}`);
});

// Developed with ❤ by Rushikesh, Saurabh, Aryan