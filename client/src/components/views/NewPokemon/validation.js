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
    errors.life = "life can not be more than 100";
  }

  if (!input.attack) {
    errors.attack = "Attack can not be empty";
  } else if (input.attack > 100) {
    errors.attack = "attack can not be more than 100";
  }
  if (!input.defense) {
    errors.defense = "Defense can not be empty";
  }
  if (!input.image) {
    errors.image = "Please insert an image";
  } else if (!/^https?:\/\//i.test(input.image)) {
    errors.image =
      "Please insert a valid image URL starting with 'https://' or 'http://'";
  }

  if (!input.types || input.types.length === 0) {
    errors.types = "Please select at least one type";
  }

  if (!input.speed) {
    errors.speed = "speed can not be empty";
  }
  if (!input.weight) {
    errors.weight = "weight can not be empty";
  }
  if (!input.height) {
    errors.height = "height can not be empty";
  }

  return errors;
};
