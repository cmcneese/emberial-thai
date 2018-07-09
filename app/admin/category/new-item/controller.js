import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(formValues) {
      if (formValues) {
        const menuItem = this.store.createRecord('menu-item', formValues);
        menuItem.set('menuCategory', this.model);

        menuItem.save()
          .then(() => {
            alert('Menu Item Saved!');
            this.transitionToRoute('/');
          });
      }
    },
  },
});
