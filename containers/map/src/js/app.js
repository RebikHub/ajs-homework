import ErrorRepository from './classes/error';

const erRepo = new ErrorRepository();
erRepo.repo.set(101, 'error-01');

console.log('app worked');
console.log(erRepo.translate(101));
console.log(erRepo.translate(103));
