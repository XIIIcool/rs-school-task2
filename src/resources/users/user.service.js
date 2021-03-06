const usersRepo = require('./user.memory.repository');
const User = require('./user.model');
const TaskRepo = require('../tasks/task.memory.repository');

const findUser = (where) => usersRepo.findUser(where);

const getAll = () => usersRepo.getAll();

const get = id => usersRepo.get(id);

const remove = id => usersRepo.remove(id).then(async () => {

  let tasks = await TaskRepo.updateManyTasks(id);

  // console.log(tasks);

  // When somebody DELETE User, all Tasks where User is assignee should be updated to put userId=null
  //  let tasks = await TaskRepo.getTasksWhereUserId(id);
  //  if(tasks.length > 0){
  //    tasks.forEach((e) => {
  //      e.userId = null;
  //      TaskRepo.update(e.id, '', e);
  //    })
  //  }
});

const save = user => {
  return usersRepo.save(user);
};

const update = (id, user) => usersRepo.update(id, user);

module.exports = { getAll, get, remove, save, update, findUser };
