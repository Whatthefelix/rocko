/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 80);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports) {

var _typeof10 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/i: moduleId,
			/******/l: false,
			/******/exports: {}
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.l = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // identity function for calling harmony imports with the correct context
	/******/__webpack_require__.i = function (value) {
		return value;
	};

	/******/ // define getter function for harmony exports
	/******/__webpack_require__.d = function (exports, name, getter) {
		/******/if (!__webpack_require__.o(exports, name)) {
			/******/Object.defineProperty(exports, name, {
				/******/configurable: false,
				/******/enumerable: true,
				/******/get: getter
				/******/ });
			/******/
		}
		/******/
	};

	/******/ // getDefaultExport function for compatibility with non-harmony modules
	/******/__webpack_require__.n = function (module) {
		/******/var getter = module && module.__esModule ?
		/******/function getDefault() {
			return module['default'];
		} :
		/******/function getModuleExports() {
			return module;
		};
		/******/__webpack_require__.d(getter, 'a', getter);
		/******/return getter;
		/******/
	};

	/******/ // Object.prototype.hasOwnProperty.call
	/******/__webpack_require__.o = function (object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	};

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "./";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(__webpack_require__.s = 80);
	/******/
})(
/************************************************************************/
/******/{

	/***/15:
	/***/function _(module, exports) {

		var _typeof9 = typeof Symbol === "function" && _typeof10(Symbol.iterator) === "symbol" ? function (obj) {
			return typeof obj === 'undefined' ? 'undefined' : _typeof10(obj);
		} : function (obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof10(obj);
		};

		/******/(function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};

			/******/ // The require function
			/******/function __webpack_require__(moduleId) {

				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;

				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/i: moduleId,
					/******/l: false,
					/******/exports: {}
					/******/ };

				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

				/******/ // Flag the module as loaded
				/******/module.l = true;

				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}

			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;

			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;

			/******/ // identity function for calling harmony imports with the correct context
			/******/__webpack_require__.i = function (value) {
				return value;
			};

			/******/ // define getter function for harmony exports
			/******/__webpack_require__.d = function (exports, name, getter) {
				/******/if (!__webpack_require__.o(exports, name)) {
					/******/Object.defineProperty(exports, name, {
						/******/configurable: false,
						/******/enumerable: true,
						/******/get: getter
						/******/ });
					/******/
				}
				/******/
			};

			/******/ // getDefaultExport function for compatibility with non-harmony modules
			/******/__webpack_require__.n = function (module) {
				/******/var getter = module && module.__esModule ?
				/******/function getDefault() {
					return module['default'];
				} :
				/******/function getModuleExports() {
					return module;
				};
				/******/__webpack_require__.d(getter, 'a', getter);
				/******/return getter;
				/******/
			};

			/******/ // Object.prototype.hasOwnProperty.call
			/******/__webpack_require__.o = function (object, property) {
				return Object.prototype.hasOwnProperty.call(object, property);
			};

			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "./";

			/******/ // Load entry module and return exports
			/******/return __webpack_require__(__webpack_require__.s = 80);
			/******/
		})(
		/************************************************************************/
		/******/{

			/***/15:
			/***/function _(module, exports) {

				var _typeof8 = typeof Symbol === "function" && _typeof9(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof9(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof9(obj);
				};

				/******/(function (modules) {
					// webpackBootstrap
					/******/ // The module cache
					/******/var installedModules = {};

					/******/ // The require function
					/******/function __webpack_require__(moduleId) {

						/******/ // Check if module is in cache
						/******/if (installedModules[moduleId])
							/******/return installedModules[moduleId].exports;

						/******/ // Create a new module (and put it into the cache)
						/******/var module = installedModules[moduleId] = {
							/******/i: moduleId,
							/******/l: false,
							/******/exports: {}
							/******/ };

						/******/ // Execute the module function
						/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

						/******/ // Flag the module as loaded
						/******/module.l = true;

						/******/ // Return the exports of the module
						/******/return module.exports;
						/******/
					}

					/******/ // expose the modules object (__webpack_modules__)
					/******/__webpack_require__.m = modules;

					/******/ // expose the module cache
					/******/__webpack_require__.c = installedModules;

					/******/ // identity function for calling harmony imports with the correct context
					/******/__webpack_require__.i = function (value) {
						return value;
					};

					/******/ // define getter function for harmony exports
					/******/__webpack_require__.d = function (exports, name, getter) {
						/******/if (!__webpack_require__.o(exports, name)) {
							/******/Object.defineProperty(exports, name, {
								/******/configurable: false,
								/******/enumerable: true,
								/******/get: getter
								/******/ });
							/******/
						}
						/******/
					};

					/******/ // getDefaultExport function for compatibility with non-harmony modules
					/******/__webpack_require__.n = function (module) {
						/******/var getter = module && module.__esModule ?
						/******/function getDefault() {
							return module['default'];
						} :
						/******/function getModuleExports() {
							return module;
						};
						/******/__webpack_require__.d(getter, 'a', getter);
						/******/return getter;
						/******/
					};

					/******/ // Object.prototype.hasOwnProperty.call
					/******/__webpack_require__.o = function (object, property) {
						return Object.prototype.hasOwnProperty.call(object, property);
					};

					/******/ // __webpack_public_path__
					/******/__webpack_require__.p = "./";

					/******/ // Load entry module and return exports
					/******/return __webpack_require__(__webpack_require__.s = 80);
					/******/
				})(
				/************************************************************************/
				/******/{

					/***/15:
					/***/function _(module, exports) {

						var _typeof7 = typeof Symbol === "function" && _typeof8(Symbol.iterator) === "symbol" ? function (obj) {
							return typeof obj === 'undefined' ? 'undefined' : _typeof8(obj);
						} : function (obj) {
							return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof8(obj);
						};

						/******/(function (modules) {
							// webpackBootstrap
							/******/ // The module cache
							/******/var installedModules = {};

							/******/ // The require function
							/******/function __webpack_require__(moduleId) {

								/******/ // Check if module is in cache
								/******/if (installedModules[moduleId])
									/******/return installedModules[moduleId].exports;

								/******/ // Create a new module (and put it into the cache)
								/******/var module = installedModules[moduleId] = {
									/******/i: moduleId,
									/******/l: false,
									/******/exports: {}
									/******/ };

								/******/ // Execute the module function
								/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

								/******/ // Flag the module as loaded
								/******/module.l = true;

								/******/ // Return the exports of the module
								/******/return module.exports;
								/******/
							}

							/******/ // expose the modules object (__webpack_modules__)
							/******/__webpack_require__.m = modules;

							/******/ // expose the module cache
							/******/__webpack_require__.c = installedModules;

							/******/ // identity function for calling harmony imports with the correct context
							/******/__webpack_require__.i = function (value) {
								return value;
							};

							/******/ // define getter function for harmony exports
							/******/__webpack_require__.d = function (exports, name, getter) {
								/******/if (!__webpack_require__.o(exports, name)) {
									/******/Object.defineProperty(exports, name, {
										/******/configurable: false,
										/******/enumerable: true,
										/******/get: getter
										/******/ });
									/******/
								}
								/******/
							};

							/******/ // getDefaultExport function for compatibility with non-harmony modules
							/******/__webpack_require__.n = function (module) {
								/******/var getter = module && module.__esModule ?
								/******/function getDefault() {
									return module['default'];
								} :
								/******/function getModuleExports() {
									return module;
								};
								/******/__webpack_require__.d(getter, 'a', getter);
								/******/return getter;
								/******/
							};

							/******/ // Object.prototype.hasOwnProperty.call
							/******/__webpack_require__.o = function (object, property) {
								return Object.prototype.hasOwnProperty.call(object, property);
							};

							/******/ // __webpack_public_path__
							/******/__webpack_require__.p = "./";

							/******/ // Load entry module and return exports
							/******/return __webpack_require__(__webpack_require__.s = 80);
							/******/
						})(
						/************************************************************************/
						/******/{

							/***/15:
							/***/function _(module, exports) {

								var _typeof6 = typeof Symbol === "function" && _typeof7(Symbol.iterator) === "symbol" ? function (obj) {
									return typeof obj === 'undefined' ? 'undefined' : _typeof7(obj);
								} : function (obj) {
									return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof7(obj);
								};

								/******/(function (modules) {
									// webpackBootstrap
									/******/ // The module cache
									/******/var installedModules = {};

									/******/ // The require function
									/******/function __webpack_require__(moduleId) {

										/******/ // Check if module is in cache
										/******/if (installedModules[moduleId])
											/******/return installedModules[moduleId].exports;

										/******/ // Create a new module (and put it into the cache)
										/******/var module = installedModules[moduleId] = {
											/******/i: moduleId,
											/******/l: false,
											/******/exports: {}
											/******/ };

										/******/ // Execute the module function
										/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

										/******/ // Flag the module as loaded
										/******/module.l = true;

										/******/ // Return the exports of the module
										/******/return module.exports;
										/******/
									}

									/******/ // expose the modules object (__webpack_modules__)
									/******/__webpack_require__.m = modules;

									/******/ // expose the module cache
									/******/__webpack_require__.c = installedModules;

									/******/ // identity function for calling harmony imports with the correct context
									/******/__webpack_require__.i = function (value) {
										return value;
									};

									/******/ // define getter function for harmony exports
									/******/__webpack_require__.d = function (exports, name, getter) {
										/******/if (!__webpack_require__.o(exports, name)) {
											/******/Object.defineProperty(exports, name, {
												/******/configurable: false,
												/******/enumerable: true,
												/******/get: getter
												/******/ });
											/******/
										}
										/******/
									};

									/******/ // getDefaultExport function for compatibility with non-harmony modules
									/******/__webpack_require__.n = function (module) {
										/******/var getter = module && module.__esModule ?
										/******/function getDefault() {
											return module['default'];
										} :
										/******/function getModuleExports() {
											return module;
										};
										/******/__webpack_require__.d(getter, 'a', getter);
										/******/return getter;
										/******/
									};

									/******/ // Object.prototype.hasOwnProperty.call
									/******/__webpack_require__.o = function (object, property) {
										return Object.prototype.hasOwnProperty.call(object, property);
									};

									/******/ // __webpack_public_path__
									/******/__webpack_require__.p = "./";

									/******/ // Load entry module and return exports
									/******/return __webpack_require__(__webpack_require__.s = 80);
									/******/
								})(
								/************************************************************************/
								/******/{

									/***/15:
									/***/function _(module, exports) {

										var _typeof5 = typeof Symbol === "function" && _typeof6(Symbol.iterator) === "symbol" ? function (obj) {
											return typeof obj === 'undefined' ? 'undefined' : _typeof6(obj);
										} : function (obj) {
											return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof6(obj);
										};

										/******/(function (modules) {
											// webpackBootstrap
											/******/ // The module cache
											/******/var installedModules = {};

											/******/ // The require function
											/******/function __webpack_require__(moduleId) {

												/******/ // Check if module is in cache
												/******/if (installedModules[moduleId])
													/******/return installedModules[moduleId].exports;

												/******/ // Create a new module (and put it into the cache)
												/******/var module = installedModules[moduleId] = {
													/******/i: moduleId,
													/******/l: false,
													/******/exports: {}
													/******/ };

												/******/ // Execute the module function
												/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

												/******/ // Flag the module as loaded
												/******/module.l = true;

												/******/ // Return the exports of the module
												/******/return module.exports;
												/******/
											}

											/******/ // expose the modules object (__webpack_modules__)
											/******/__webpack_require__.m = modules;

											/******/ // expose the module cache
											/******/__webpack_require__.c = installedModules;

											/******/ // identity function for calling harmony imports with the correct context
											/******/__webpack_require__.i = function (value) {
												return value;
											};

											/******/ // define getter function for harmony exports
											/******/__webpack_require__.d = function (exports, name, getter) {
												/******/if (!__webpack_require__.o(exports, name)) {
													/******/Object.defineProperty(exports, name, {
														/******/configurable: false,
														/******/enumerable: true,
														/******/get: getter
														/******/ });
													/******/
												}
												/******/
											};

											/******/ // getDefaultExport function for compatibility with non-harmony modules
											/******/__webpack_require__.n = function (module) {
												/******/var getter = module && module.__esModule ?
												/******/function getDefault() {
													return module['default'];
												} :
												/******/function getModuleExports() {
													return module;
												};
												/******/__webpack_require__.d(getter, 'a', getter);
												/******/return getter;
												/******/
											};

											/******/ // Object.prototype.hasOwnProperty.call
											/******/__webpack_require__.o = function (object, property) {
												return Object.prototype.hasOwnProperty.call(object, property);
											};

											/******/ // __webpack_public_path__
											/******/__webpack_require__.p = "./";

											/******/ // Load entry module and return exports
											/******/return __webpack_require__(__webpack_require__.s = 80);
											/******/
										})(
										/************************************************************************/
										/******/{

											/***/15:
											/***/function _(module, exports) {

												var _typeof4 = typeof Symbol === "function" && _typeof5(Symbol.iterator) === "symbol" ? function (obj) {
													return typeof obj === 'undefined' ? 'undefined' : _typeof5(obj);
												} : function (obj) {
													return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof5(obj);
												};

												/******/(function (modules) {
													// webpackBootstrap
													/******/ // The module cache
													/******/var installedModules = {};

													/******/ // The require function
													/******/function __webpack_require__(moduleId) {

														/******/ // Check if module is in cache
														/******/if (installedModules[moduleId])
															/******/return installedModules[moduleId].exports;

														/******/ // Create a new module (and put it into the cache)
														/******/var module = installedModules[moduleId] = {
															/******/i: moduleId,
															/******/l: false,
															/******/exports: {}
															/******/ };

														/******/ // Execute the module function
														/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

														/******/ // Flag the module as loaded
														/******/module.l = true;

														/******/ // Return the exports of the module
														/******/return module.exports;
														/******/
													}

													/******/ // expose the modules object (__webpack_modules__)
													/******/__webpack_require__.m = modules;

													/******/ // expose the module cache
													/******/__webpack_require__.c = installedModules;

													/******/ // identity function for calling harmony imports with the correct context
													/******/__webpack_require__.i = function (value) {
														return value;
													};

													/******/ // define getter function for harmony exports
													/******/__webpack_require__.d = function (exports, name, getter) {
														/******/if (!__webpack_require__.o(exports, name)) {
															/******/Object.defineProperty(exports, name, {
																/******/configurable: false,
																/******/enumerable: true,
																/******/get: getter
																/******/ });
															/******/
														}
														/******/
													};

													/******/ // getDefaultExport function for compatibility with non-harmony modules
													/******/__webpack_require__.n = function (module) {
														/******/var getter = module && module.__esModule ?
														/******/function getDefault() {
															return module['default'];
														} :
														/******/function getModuleExports() {
															return module;
														};
														/******/__webpack_require__.d(getter, 'a', getter);
														/******/return getter;
														/******/
													};

													/******/ // Object.prototype.hasOwnProperty.call
													/******/__webpack_require__.o = function (object, property) {
														return Object.prototype.hasOwnProperty.call(object, property);
													};

													/******/ // __webpack_public_path__
													/******/__webpack_require__.p = "./";

													/******/ // Load entry module and return exports
													/******/return __webpack_require__(__webpack_require__.s = 80);
													/******/
												})(
												/************************************************************************/
												/******/{

													/***/15:
													/***/function _(module, exports) {

														var _typeof3 = typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol" ? function (obj) {
															return typeof obj === 'undefined' ? 'undefined' : _typeof4(obj);
														} : function (obj) {
															return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof4(obj);
														};

														/******/(function (modules) {
															// webpackBootstrap
															/******/ // The module cache
															/******/var installedModules = {};

															/******/ // The require function
															/******/function __webpack_require__(moduleId) {

																/******/ // Check if module is in cache
																/******/if (installedModules[moduleId])
																	/******/return installedModules[moduleId].exports;

																/******/ // Create a new module (and put it into the cache)
																/******/var module = installedModules[moduleId] = {
																	/******/i: moduleId,
																	/******/l: false,
																	/******/exports: {}
																	/******/ };

																/******/ // Execute the module function
																/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

																/******/ // Flag the module as loaded
																/******/module.l = true;

																/******/ // Return the exports of the module
																/******/return module.exports;
																/******/
															}

															/******/ // expose the modules object (__webpack_modules__)
															/******/__webpack_require__.m = modules;

															/******/ // expose the module cache
															/******/__webpack_require__.c = installedModules;

															/******/ // identity function for calling harmony imports with the correct context
															/******/__webpack_require__.i = function (value) {
																return value;
															};

															/******/ // define getter function for harmony exports
															/******/__webpack_require__.d = function (exports, name, getter) {
																/******/if (!__webpack_require__.o(exports, name)) {
																	/******/Object.defineProperty(exports, name, {
																		/******/configurable: false,
																		/******/enumerable: true,
																		/******/get: getter
																		/******/ });
																	/******/
																}
																/******/
															};

															/******/ // getDefaultExport function for compatibility with non-harmony modules
															/******/__webpack_require__.n = function (module) {
																/******/var getter = module && module.__esModule ?
																/******/function getDefault() {
																	return module['default'];
																} :
																/******/function getModuleExports() {
																	return module;
																};
																/******/__webpack_require__.d(getter, 'a', getter);
																/******/return getter;
																/******/
															};

															/******/ // Object.prototype.hasOwnProperty.call
															/******/__webpack_require__.o = function (object, property) {
																return Object.prototype.hasOwnProperty.call(object, property);
															};

															/******/ // __webpack_public_path__
															/******/__webpack_require__.p = "./";

															/******/ // Load entry module and return exports
															/******/return __webpack_require__(__webpack_require__.s = 80);
															/******/
														})(
														/************************************************************************/
														/******/{

															/***/15:
															/***/function _(module, exports) {

																var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
																	return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
																} : function (obj) {
																	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
																};

																/******/(function (modules) {
																	// webpackBootstrap
																	/******/ // The module cache
																	/******/var installedModules = {};

																	/******/ // The require function
																	/******/function __webpack_require__(moduleId) {

																		/******/ // Check if module is in cache
																		/******/if (installedModules[moduleId])
																			/******/return installedModules[moduleId].exports;

																		/******/ // Create a new module (and put it into the cache)
																		/******/var module = installedModules[moduleId] = {
																			/******/i: moduleId,
																			/******/l: false,
																			/******/exports: {}
																			/******/ };

																		/******/ // Execute the module function
																		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

																		/******/ // Flag the module as loaded
																		/******/module.l = true;

																		/******/ // Return the exports of the module
																		/******/return module.exports;
																		/******/
																	}

																	/******/ // expose the modules object (__webpack_modules__)
																	/******/__webpack_require__.m = modules;

																	/******/ // expose the module cache
																	/******/__webpack_require__.c = installedModules;

																	/******/ // identity function for calling harmony imports with the correct context
																	/******/__webpack_require__.i = function (value) {
																		return value;
																	};

																	/******/ // define getter function for harmony exports
																	/******/__webpack_require__.d = function (exports, name, getter) {
																		/******/if (!__webpack_require__.o(exports, name)) {
																			/******/Object.defineProperty(exports, name, {
																				/******/configurable: false,
																				/******/enumerable: true,
																				/******/get: getter
																				/******/ });
																			/******/
																		}
																		/******/
																	};

																	/******/ // getDefaultExport function for compatibility with non-harmony modules
																	/******/__webpack_require__.n = function (module) {
																		/******/var getter = module && module.__esModule ?
																		/******/function getDefault() {
																			return module['default'];
																		} :
																		/******/function getModuleExports() {
																			return module;
																		};
																		/******/__webpack_require__.d(getter, 'a', getter);
																		/******/return getter;
																		/******/
																	};

																	/******/ // Object.prototype.hasOwnProperty.call
																	/******/__webpack_require__.o = function (object, property) {
																		return Object.prototype.hasOwnProperty.call(object, property);
																	};

																	/******/ // __webpack_public_path__
																	/******/__webpack_require__.p = "./";

																	/******/ // Load entry module and return exports
																	/******/return __webpack_require__(__webpack_require__.s = 80);
																	/******/
																})(
																/************************************************************************/
																/******/{

																	/***/16:
																	/***/function _(module, exports, __webpack_require__) {

																		/* WEBPACK VAR INJECTION */(function (module) {
																			var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
																				return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
																			} : function (obj) {
																				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
																			};

																			/**
                    * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
                    * @version v4.0.4
                    * @link https://github.com/ten1seven/what-input
                    * @license MIT
                    */
																			(function webpackUniversalModuleDefinition(root, factory) {
																				if ((false ? 'undefined' : _typeof(exports)) === 'object' && (false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["whatInput"] = factory();else root["whatInput"] = factory();
																			})(this, function () {
																				return (/******/function (modules) {
																						// webpackBootstrap
																						/******/ // The module cache
																						/******/var installedModules = {};

																						/******/ // The require function
																						/******/function __webpack_require__(moduleId) {

																							/******/ // Check if module is in cache
																							/******/if (installedModules[moduleId])
																								/******/return installedModules[moduleId].exports;

																							/******/ // Create a new module (and put it into the cache)
																							/******/var module = installedModules[moduleId] = {
																								/******/exports: {},
																								/******/id: moduleId,
																								/******/loaded: false
																								/******/ };

																							/******/ // Execute the module function
																							/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

																							/******/ // Flag the module as loaded
																							/******/module.loaded = true;

																							/******/ // Return the exports of the module
																							/******/return module.exports;
																							/******/
																						}

																						/******/ // expose the modules object (__webpack_modules__)
																						/******/__webpack_require__.m = modules;

																						/******/ // expose the module cache
																						/******/__webpack_require__.c = installedModules;

																						/******/ // __webpack_public_path__
																						/******/__webpack_require__.p = "";

																						/******/ // Load entry module and return exports
																						/******/return __webpack_require__(0);
																						/******/
																					}(
																					/************************************************************************/
																					/******/[
																					/* 0 */
																					/***/function (module, exports) {

																						module.exports = function () {

																							/*
                         ---------------
                         Variables
                         ---------------
                       */

																							// cache document.documentElement
																							var docElem = document.documentElement;

																							// last used input type
																							var currentInput = 'initial';

																							// last used input intent
																							var currentIntent = null;

																							// form input types
																							var formInputs = ['input', 'select', 'textarea'];

																							// list of modifier keys commonly used with the mouse and
																							// can be safely ignored to prevent false keyboard detection
																							var ignoreMap = [16, // shift
																							17, // control
																							18, // alt
																							91, // Windows key / left Apple cmd
																							93 // Windows menu / right Apple cmd
																							];

																							// mapping of events to input types
																							var inputMap = {
																								'keyup': 'keyboard',
																								'mousedown': 'mouse',
																								'mousemove': 'mouse',
																								'MSPointerDown': 'pointer',
																								'MSPointerMove': 'pointer',
																								'pointerdown': 'pointer',
																								'pointermove': 'pointer',
																								'touchstart': 'touch'
																							};

																							// array of all used input types
																							var inputTypes = [];

																							// boolean: true if touch buffer timer is running
																							var isBuffering = false;

																							// map of IE 10 pointer events
																							var pointerMap = {
																								2: 'touch',
																								3: 'touch', // treat pen like touch
																								4: 'mouse'
																							};

																							// touch buffer timer
																							var touchTimer = null;

																							/*
                         ---------------
                         Set up
                         ---------------
                       */

																							var setUp = function setUp() {

																								// add correct mouse wheel event mapping to `inputMap`
																								inputMap[detectWheel()] = 'mouse';

																								addListeners();
																								setInput();
																							};

																							/*
                         ---------------
                         Events
                         ---------------
                       */

																							var addListeners = function addListeners() {

																								// `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
																								// can only demonstrate potential, but not actual, interaction
																								// and are treated separately

																								// pointer events (mouse, pen, touch)
																								if (window.PointerEvent) {
																									docElem.addEventListener('pointerdown', updateInput);
																									docElem.addEventListener('pointermove', setIntent);
																								} else if (window.MSPointerEvent) {
																									docElem.addEventListener('MSPointerDown', updateInput);
																									docElem.addEventListener('MSPointerMove', setIntent);
																								} else {

																									// mouse events
																									docElem.addEventListener('mousedown', updateInput);
																									docElem.addEventListener('mousemove', setIntent);

																									// touch events
																									if ('ontouchstart' in window) {
																										docElem.addEventListener('touchstart', touchBuffer);
																									}
																								}

																								// mouse wheel
																								docElem.addEventListener(detectWheel(), setIntent);

																								// keyboard events
																								docElem.addEventListener('keydown', updateInput);
																								docElem.addEventListener('keyup', updateInput);
																							};

																							// checks conditions before updating new input
																							var updateInput = function updateInput(event) {

																								// only execute if the touch buffer timer isn't running
																								if (!isBuffering) {
																									var eventKey = event.which;
																									var value = inputMap[event.type];
																									if (value === 'pointer') value = pointerType(event);

																									if (currentInput !== value || currentIntent !== value) {

																										var activeInput = document.activeElement && formInputs.indexOf(document.activeElement.nodeName.toLowerCase()) === -1 ? true : false;

																										if (value === 'touch' ||

																										// ignore mouse modifier keys
																										value === 'mouse' && ignoreMap.indexOf(eventKey) === -1 ||

																										// don't switch if the current element is a form input
																										value === 'keyboard' && activeInput) {

																											// set the current and catch-all variable
																											currentInput = currentIntent = value;

																											setInput();
																										}
																									}
																								}
																							};

																							// updates the doc and `inputTypes` array with new input
																							var setInput = function setInput() {
																								docElem.setAttribute('data-whatinput', currentInput);
																								docElem.setAttribute('data-whatintent', currentInput);

																								if (inputTypes.indexOf(currentInput) === -1) {
																									inputTypes.push(currentInput);
																									docElem.className += ' whatinput-types-' + currentInput;
																								}
																							};

																							// updates input intent for `mousemove` and `pointermove`
																							var setIntent = function setIntent(event) {

																								// only execute if the touch buffer timer isn't running
																								if (!isBuffering) {
																									var value = inputMap[event.type];
																									if (value === 'pointer') value = pointerType(event);

																									if (currentIntent !== value) {
																										currentIntent = value;

																										docElem.setAttribute('data-whatintent', currentIntent);
																									}
																								}
																							};

																							// buffers touch events because they frequently also fire mouse events
																							var touchBuffer = function touchBuffer(event) {

																								// clear the timer if it happens to be running
																								window.clearTimeout(touchTimer);

																								// set the current input
																								updateInput(event);

																								// set the isBuffering to `true`
																								isBuffering = true;

																								// run the timer
																								touchTimer = window.setTimeout(function () {

																									// if the timer runs out, set isBuffering back to `false`
																									isBuffering = false;
																								}, 200);
																							};

																							/*
                         ---------------
                         Utilities
                         ---------------
                       */

																							var pointerType = function pointerType(event) {
																								if (typeof event.pointerType === 'number') {
																									return pointerMap[event.pointerType];
																								} else {
																									return event.pointerType === 'pen' ? 'touch' : event.pointerType; // treat pen like touch
																								}
																							};

																							// detect version of mouse wheel event to use
																							// via https://developer.mozilla.org/en-US/docs/Web/Events/wheel
																							var detectWheel = function detectWheel() {
																								return 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"

																								document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
																								'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox
																							};

																							/*
                         ---------------
                         Init
                          don't start script unless browser cuts the mustard
                         (also passes if polyfills are used)
                         ---------------
                       */

																							if ('addEventListener' in window && Array.prototype.indexOf) {
																								setUp();
																							}

																							/*
                         ---------------
                         API
                         ---------------
                       */

																							return {

																								// returns string: the current input type
																								// opt: 'loose'|'strict'
																								// 'strict' (default): returns the same value as the `data-whatinput` attribute
																								// 'loose': includes `data-whatintent` value if it's more current than `data-whatinput`
																								ask: function ask(opt) {
																									return opt === 'loose' ? currentIntent : currentInput;
																								},

																								// returns array: all the detected input types
																								types: function types() {
																									return inputTypes;
																								}

																							};
																						}();

																						/***/
																					}
																					/******/])
																				);
																			});
																			;
																			/* WEBPACK VAR INJECTION */
																		}).call(exports, __webpack_require__(8)(module));

																		/***/
																	},

																	/***/8:
																	/***/function _(module, exports) {

																		module.exports = function (module) {
																			if (!module.webpackPolyfill) {
																				module.deprecate = function () {};
																				module.paths = [];
																				// module.parent = undefined by default
																				if (!module.children) module.children = [];
																				Object.defineProperty(module, "loaded", {
																					enumerable: true,
																					get: function get() {
																						return module.l;
																					}
																				});
																				Object.defineProperty(module, "id", {
																					enumerable: true,
																					get: function get() {
																						return module.i;
																					}
																				});
																				module.webpackPolyfill = 1;
																			}
																			return module;
																		};

																		/***/
																	},

																	/***/80:
																	/***/function _(module, exports, __webpack_require__) {

																		module.exports = __webpack_require__(16);

																		/***/
																	}

																	/******/ });

																/***/
															},

															/***/80:
															/***/function _(module, exports, __webpack_require__) {

																module.exports = __webpack_require__(15);

																/***/
															}

															/******/ });

														/***/
													},

													/***/80:
													/***/function _(module, exports, __webpack_require__) {

														module.exports = __webpack_require__(15);

														/***/
													}

													/******/ });

												/***/
											},

											/***/80:
											/***/function _(module, exports, __webpack_require__) {

												module.exports = __webpack_require__(15);

												/***/
											}

											/******/ });

										/***/
									},

									/***/80:
									/***/function _(module, exports, __webpack_require__) {

										module.exports = __webpack_require__(15);

										/***/
									}

									/******/ });

								/***/
							},

							/***/80:
							/***/function _(module, exports, __webpack_require__) {

								module.exports = __webpack_require__(15);

								/***/
							}

							/******/ });

						/***/
					},

					/***/80:
					/***/function _(module, exports, __webpack_require__) {

						module.exports = __webpack_require__(15);

						/***/
					}

					/******/ });

				/***/
			},

			/***/80:
			/***/function _(module, exports, __webpack_require__) {

				module.exports = __webpack_require__(15);

				/***/
			}

			/******/ });

		/***/
	},

	/***/80:
	/***/function _(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(15);

		/***/
	}

	/******/ });

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ })

/******/ });