export const validation = (input) => {
  let errors = {};

  if (!input.name) {
    errors.name = "Please insert a name";
  } else if (!/^[a-zA-Z]+$/.test(input.name)) {
    errors.name = "The name should contain only letters";
  } else if (input.name.length > 10) {
    errors.name = "the name can't have more than 10 characters";
  }

  if (!input.life) {
    errors.life = "Life can not be empty";
  } else if (input.life > 100) {
    errors.life = "Life can not be more than 100";
  }

  if (!input.attack) {
    errors.attack = "Attack can not be empty";
  } else if (input.attack > 200 || input.attack < 1) {
    errors.attack = "attack can not be more than 200";
  }

  if (!input.defense || input.defense < 1) {
    errors.defense = "Defense can not be empty";
  } else if (input.defense > 200) {
    errors.defense = "defense can not be more than 200";
  }

  if (!input.image) {
    errors.image = "Please insert an image";
  } else if (!/^https?:\/\//i.test(input.image)) {
    errors.image =
      "Please insert a valid image URL starting with 'https://' or 'http://'";
  }

  if (input.types.length === 0) {
    errors.types = "Please select at least one type";
  }

  if (input.weight > 200 || input.weight < 0) {
    errors.weight = "weight must be between 0 and 200";
  }

  if (input.height > 200 || input.height < 0) {
    errors.height = "height must be between 0 and 200";
  }

  if (input.speed > 100 || input.speed < 0) {
    errors.speed = "speed must be between 0 and 100";
  }

  return errors;
};
