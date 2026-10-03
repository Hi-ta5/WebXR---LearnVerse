// A-Frame Custom Components for OSI Model Simulator

// blinker component: Simulates networking / server active lights
AFRAME.registerComponent('blinker', {
  schema: {
    minInterval: { type: 'number', default: 100 },
    maxInterval: { type: 'number', default: 1000 },
    colorOn: { type: 'color', default: '#22D3EE' }, // Neon cyan
    colorOff: { type: 'color', default: '#022329' } // Very dim cyan
  },
  init: function () {
    this.el.setAttribute('material', 'color', this.data.colorOff);
    this.el.setAttribute('material', 'emissive', this.data.colorOff);
    this.el.setAttribute('material', 'emissiveIntensity', 0.2);
    this.blink = this.blink.bind(this);
    this.timer = setTimeout(this.blink, this.randomInterval());
  },
  randomInterval: function () {
    return Math.random() * (this.data.maxInterval - this.data.minInterval) + this.data.minInterval;
  },
  blink: function () {
    if (!this.el) return;
    const isOn = Math.random() > 0.4;
    const activeColor = isOn ? this.data.colorOn : this.data.colorOff;
    const activeIntensity = isOn ? 1.5 : 0.2;
    
    this.el.setAttribute('material', 'color', activeColor);
    this.el.setAttribute('material', 'emissive', activeColor);
    this.el.setAttribute('material', 'emissiveIntensity', activeIntensity);
    
    this.timer = setTimeout(this.blink, this.randomInterval());
  },
  remove: function () {
    clearTimeout(this.timer);
  }
});

// network-link component: Connects two router nodes in 3D space with a glowing tube
AFRAME.registerComponent('network-link', {
  schema: {
    from: { type: 'selector' },
    to: { type: 'selector' },
    color: { type: 'color', default: '#3B82F6' }, // Neon Blue
    width: { type: 'number', default: 0.015 },
    active: { type: 'boolean', default: false }
  },
  init: function () {
    this.cylinder = document.createElement('a-cylinder');
    this.el.appendChild(this.cylinder);
    this.updateLink = this.updateLink.bind(this);
    
    // Listen for changes in node positions (if any) or updates
    if (this.data.from && this.data.to) {
      this.data.from.addEventListener('componentchanged', this.updateLink);
      this.data.to.addEventListener('componentchanged', this.updateLink);
    }
  },
  update: function () {
    this.updateLink();
  },
  updateLink: function () {
    if (!this.data.from || !this.data.to) return;
    
    // Defensive check: A-Frame objects might load sequentially, wait if object3D is not ready yet
    if (!this.data.from.object3D || !this.data.to.object3D) {
      // Re-trigger update once scene has loaded fully
      if (this.el.sceneEl) {
        this.el.sceneEl.addEventListener('loaded', this.updateLink);
      }
      return;
    }
    
    const p1 = this.data.from.object3D.position;
    const p2 = this.data.to.object3D.position;
    
    // Calculate distance (height of cylinder)
    const distance = p1.distanceTo(p2);
    
    // Calculate midpoint position
    const midpoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
    
    // Position cylinder at midpoint
    this.cylinder.setAttribute('position', midpoint);
    this.cylinder.setAttribute('height', distance);
    this.cylinder.setAttribute('radius', this.data.width);
    
    // Orient cylinder to align with the direction vector
    const direction = new THREE.Vector3().subVectors(p2, p1).normalize();
    const alignVector = new THREE.Vector3(0, 1, 0); // Default cylinder orientation
    const quaternion = new THREE.Quaternion().setFromUnitVectors(alignVector, direction);
    
    const euler = new THREE.Euler().setFromQuaternion(quaternion, 'XYZ');
    
    // Robust conversion using plain JS math to avoid Three.js version discrepancies
    this.cylinder.setAttribute('rotation', {
      x: euler.x * 180 / Math.PI,
      y: euler.y * 180 / Math.PI,
      z: euler.z * 180 / Math.PI
    });
    
    // Styling
    const color = this.data.active ? '#F59E0B' : this.data.color; // Orange if active path
    
    this.cylinder.setAttribute('material', {
      shader: 'flat',
      color: color,
      transparent: true,
      opacity: this.data.active ? 0.9 : 0.4
    });
  },
  remove: function () {
    if (this.data.from) this.data.from.removeEventListener('componentchanged', this.updateLink);
    if (this.data.to) this.data.to.removeEventListener('componentchanged', this.updateLink);
  }
});

// hover-highlight component: Visual feedback when hovering buttons/cards
AFRAME.registerComponent('hover-highlight', {
  schema: {
    colorActive: { type: 'color', default: '#8BC34A' }, // Active Green
    scaleOffset: { type: 'number', default: 1.05 }
  },
  init: function () {
    this.originalScale = Object.assign({}, this.el.getAttribute('scale') || { x: 1, y: 1, z: 1 });
    this.hoverScale = {
      x: this.originalScale.x * this.data.scaleOffset,
      y: this.originalScale.y * this.data.scaleOffset,
      z: this.originalScale.z * this.data.scaleOffset
    };
    
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    
    this.el.addEventListener('mouseenter', this.onMouseEnter);
    this.el.addEventListener('mouseleave', this.onMouseLeave);
  },
  onMouseEnter: function () {
    // scale up slightly
    this.el.setAttribute('animation__scale', {
      property: 'scale',
      to: `${this.hoverScale.x} ${this.hoverScale.y} ${this.hoverScale.z}`,
      dur: 150,
      easing: 'easeOutQuad'
    });
    
    // Add subtle visual indicator
    const borderEl = this.el.querySelector('.card-border');
    if (borderEl) {
      borderEl.setAttribute('material', 'opacity', 1.0);
      borderEl.setAttribute('material', 'emissiveIntensity', 1.5);
    }
  },
  onMouseLeave: function () {
    // scale down to original
    this.el.setAttribute('animation__scale', {
      property: 'scale',
      to: `${this.originalScale.x} ${this.originalScale.y} ${this.originalScale.z}`,
      dur: 150,
      easing: 'easeOutQuad'
    });
    
    const borderEl = this.el.querySelector('.card-border');
    if (borderEl) {
      const isSelected = this.el.getAttribute('data-selected') === 'true';
      borderEl.setAttribute('material', 'opacity', isSelected ? 0.9 : 0.3);
      borderEl.setAttribute('material', 'emissiveIntensity', isSelected ? 0.2 : 0.1);
    }
  }
});
