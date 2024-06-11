import { ref } from "vue";

export const fieldsManager = () => {
  const object = ref<any>({});

  const addLazyProps = (name?: string, isCheckedNull?: boolean, indexForm?: number) => {
    if (name !== undefined && isCheckedNull !== undefined) {
      if (object.value[name] === undefined) {
        object.value[name] = {
          data: null,
          isCheckedNull: isCheckedNull,
          indexForm: indexForm,
          isError: false,
        };
      }
    }
  };

  const generateDataFields = () => {
    const newFileds: any = {};

    for (let key in object.value) {
      newFileds[key] = object.value[key].data;
    }

    return newFileds;
  };

  const checkError = (key: string) => {
    if (object.value[key] !== undefined) return object.value[key].isError;
    return false;
  };

  const validateProps = (indexForm: number) => {
    let result = true;
    const props = Object.keys(object.value).filter((item) => {
      if (object.value[item].isCheckedNull === true && object.value[item].indexForm === indexForm) {
        return object.value[item];
      }
    });

    for (let key in props) {
      if (object.value[props[key]].data === null || object.value[props[key]].data === "") {
        object.value[props[key]].isError = true;
        result = false;
      } else {
        object.value[props[key]].isError = false;
      }
    }

    return result;
  };

  return {
    object,
    generateDataFields,
    addLazyProps,
    checkError,
    validateProps,
  };
};
