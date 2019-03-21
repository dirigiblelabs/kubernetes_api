var method = EntityBuilder.prototype;

function EntityBuilder() {
	this.metadata = new Metadata();
}

method.getMetadata = function() {
	return this.metadata;
};

function Metadata() {

	Metadata.prototype.getAnnotations = function() {
		return this.annotations;
	};

	Metadata.prototype.setAnnotations = function(annotations) {
		this.annotations = annotations;
	};

	Metadata.prototype.getName = function() {
		return this.name;
	};

	Metadata.prototype.setName = function(name) {
		this.name = name;
	};

	Metadata.prototype.getNamespace = function() {
		return this.namespace;
	};

	Metadata.prototype.setNamespace = function(namespace) {
		this.namespace = namespace;
	};

	Metadata.prototype.getLabels = function() {
		return this.labels;
	};

	Metadata.prototype.setLabels = function(labels) {
		this.labels = labels;
	};
}

method.build = function() {
	return {
		name: this.getMetadata().getName(),
		annotations: this.getMetadata().getAnnotations(),
		namespace: this.getMetadata().getNamespace(),
		labels: this.getMetadata().getLabels()
	};
};

module.exports = EntityBuilder;