import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(formValues) {

        this.model.setProperties(formValues);

        this.model.save()
          .then(() => {
            alert('Item Saved!');
            this.transitionToRoute('admin.category.detail', this.get('model.menuCategory.id'));
          });

      },
    },

});
