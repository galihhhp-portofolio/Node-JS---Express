import fs from 'fs'
import path from 'path'
import data from '../../data/data.json'

const filePath = path.resolve(__dirname, '../../data/data.json')

class PostController {
  static getCompChoice = (req, res) => {
    let compChoice = ''
    const choice = Math.random();
    if (choice <= 1 / 3) compChoice = 'rock';
    if (choice > 1 / 3 && choice <= 2 / 3) compChoice = 'paper';
    if (choice > 2 / 3) compChoice = 'scissor';

    res.send(compChoice)
  }

  static getHistory = (req, res) => {
    res.status(200).json(data)
  }

  static getHistoryView = (req, res) => {
    return res.render(
      'posts/history.ejs', { results: data }
    )
  }

  static getIndexView = (req, res) => {
    res.render('posts/index')
  }

  static createHistory = (req, res) => {
    data.push(req.body)

    return fs.writeFile(
      filePath,
      JSON.stringify(data),
      'utf-8',
      () => res.status(201).json({ msg: `Your game history succesfully added on ${filePath}` })
    )
  }

  static deleteHistory = (req, res) => {
    let history = data;
    history.splice(0, history.length)

    return fs.writeFile(
      filePath,
      JSON.stringify(data),
      'utf-8',
      () => res.status(201).json({ msg: `Your game history succesfully deleted on ${filePath}` })
    )
  }
}

export default PostController