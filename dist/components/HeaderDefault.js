"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@chakra-ui/react");
var _logo = _interopRequireDefault(require("./logo.png"));
var _fi = require("react-icons/fi");
var _bi = require("react-icons/bi");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const HeaderDefault = props => {
  const [openMenu, setOpenMenu] = (0, _react.useState)(false);
  const [openMenu2, setOpenMenu2] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(_react2.ChakraProvider, null, /*#__PURE__*/_react.default.createElement(_react2.Grid, {
    templateColumns: "repeat(2, 1fr)",
    marginBottom: "39px"
  }, /*#__PURE__*/_react.default.createElement(_react2.GridItem, null, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
    src: _logo.default,
    alt: "logo",
    w: "121px",
    h: "39px",
    mr: "10px",
    mb: "5px"
  }), /*#__PURE__*/_react.default.createElement(_react2.Breadcrumb, {
    spacing: "8px",
    separator: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
      as: _fi.FiChevronRight,
      color: "gray.500",
      mt: "9px"
    }),
    borderLeft: "1px solid ",
    borderColor: "black.100",
    pl: "10px"
  }, /*#__PURE__*/_react.default.createElement(_react2.BreadcrumbItem, null, /*#__PURE__*/_react.default.createElement(_react2.BreadcrumbLink, null, /*#__PURE__*/_react.default.createElement(_react2.Box, {
    onMouseLeave: () => setOpenMenu2(false),
    onMouseEnter: () => setOpenMenu2(true)
  }, /*#__PURE__*/_react.default.createElement(_react2.Menu, {
    isOpen: openMenu2
  }, _ref => {
    let {
      isOpen
    } = _ref;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_react2.MenuButton, {
      isActive: isOpen,
      as: _react2.Button,
      bg: "transparent",
      _hover: {
        bg: "transparent"
      },
      leftIcon: /*#__PURE__*/_react.default.createElement(_react2.Box, {
        w: "40px",
        h: "40px",
        mr: "10px"
      }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
        src: "https://bit.ly/dan-abramov",
        alt: "Dan Abramov",
        borderRadius: "3px"
      }))
    }, "Organiza\xE7\xE3o"), /*#__PURE__*/_react.default.createElement(_react2.MenuList, null, /*#__PURE__*/_react.default.createElement(_react2.MenuItem, null, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
      w: "35px",
      h: "35px",
      mr: "10px"
    }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
      src: "https://bit.ly/dan-abramov",
      alt: "Dan Abramov",
      borderRadius: "3px"
    })), /*#__PURE__*/_react.default.createElement(_react2.Text, {
      fontWeight: "semibold",
      fontSize: "18px",
      color: "black.500"
    }, "Nome do Workspace"))), /*#__PURE__*/_react.default.createElement(_react2.MenuItem, null, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
      w: "35px",
      h: "35px",
      mr: "10px"
    }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
      src: "https://bit.ly/dan-abramov",
      alt: "Dan Abramov",
      borderRadius: "3px"
    })), /*#__PURE__*/_react.default.createElement(_react2.Text, {
      fontWeight: "semibold",
      fontSize: "18px",
      color: "black.500"
    }, "Nome do Workspace"))), /*#__PURE__*/_react.default.createElement(_react2.MenuItem, null, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
      w: "35px",
      h: "35px",
      mr: "10px"
    }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
      src: "https://bit.ly/dan-abramov",
      alt: "Dan Abramov",
      borderRadius: "3px"
    })), /*#__PURE__*/_react.default.createElement(_react2.Text, {
      fontWeight: "semibold",
      fontSize: "18px",
      color: "black.500"
    }, "Nome do Workspace"))), /*#__PURE__*/_react.default.createElement(_react2.MenuItem, null, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
      w: "35px",
      h: "35px",
      mr: "10px"
    }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
      src: "https://bit.ly/dan-abramov",
      alt: "Dan Abramov",
      borderRadius: "3px"
    })), /*#__PURE__*/_react.default.createElement(_react2.Text, {
      fontWeight: "semibold",
      fontSize: "18px",
      color: "black.500"
    }, "Nome do Workspace"))), /*#__PURE__*/_react.default.createElement(_react2.MenuItem, null, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
      w: "35px",
      h: "35px",
      mr: "10px"
    }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
      src: "https://bit.ly/dan-abramov",
      alt: "Dan Abramov",
      borderRadius: "3px"
    })), /*#__PURE__*/_react.default.createElement(_react2.Text, {
      fontWeight: "semibold",
      fontSize: "18px",
      color: "black.500"
    }, "Nome do Workspace"))), /*#__PURE__*/_react.default.createElement(_react2.MenuItem, null, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
      w: "35px",
      h: "35px",
      mr: "10px"
    }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
      src: "https://bit.ly/dan-abramov",
      alt: "Dan Abramov",
      borderRadius: "3px"
    })), /*#__PURE__*/_react.default.createElement(_react2.Text, {
      fontWeight: "semibold",
      fontSize: "18px",
      color: "black.500"
    }, "Nome do Workspace"))), /*#__PURE__*/_react.default.createElement(_react2.MenuItem, null, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
      w: "35px",
      h: "35px",
      mr: "10px"
    }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
      src: "https://bit.ly/dan-abramov",
      alt: "Dan Abramov",
      borderRadius: "3px"
    })), /*#__PURE__*/_react.default.createElement(_react2.Text, {
      fontWeight: "semibold",
      fontSize: "18px",
      color: "black.500"
    }, "Nome do Workspace"))), /*#__PURE__*/_react.default.createElement(_react2.MenuItem, null, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
      w: "35px",
      h: "35px",
      mr: "10px"
    }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
      src: "https://bit.ly/dan-abramov",
      alt: "Dan Abramov",
      borderRadius: "3px"
    })), /*#__PURE__*/_react.default.createElement(_react2.Text, {
      fontWeight: "semibold",
      fontSize: "18px",
      color: "black.500"
    }, "Nome do Workspace")))));
  })))), /*#__PURE__*/_react.default.createElement(_react2.BreadcrumbItem, null, /*#__PURE__*/_react.default.createElement(_react2.Box, {
    onMouseLeave: () => setOpenMenu(false),
    onMouseEnter: () => setOpenMenu(true)
  }, /*#__PURE__*/_react.default.createElement(_react2.Menu, {
    isOpen: openMenu
  }, _ref2 => {
    let {
      isOpen
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_react2.MenuButton, {
      isActive: isOpen,
      as: _react2.Button,
      bg: "transparent",
      _hover: {
        bg: "transparent"
      },
      leftIcon: /*#__PURE__*/_react.default.createElement(_react2.Box, {
        w: "40px",
        h: "40px",
        mr: "10px"
      }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
        src: "https://bit.ly/dan-abramov",
        alt: "Dan Abramov",
        borderRadius: "3px"
      }))
    }, "Workspace"), /*#__PURE__*/_react.default.createElement(_react2.MenuList, null, /*#__PURE__*/_react.default.createElement(_react2.MenuItem, null, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
      w: "35px",
      h: "35px",
      mr: "10px"
    }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
      src: "https://bit.ly/dan-abramov",
      alt: "Dan Abramov",
      borderRadius: "3px"
    })), /*#__PURE__*/_react.default.createElement(_react2.Text, {
      fontWeight: "semibold",
      fontSize: "18px",
      color: "black.500"
    }, "Nome do Workspace"))), /*#__PURE__*/_react.default.createElement(_react2.MenuItem, null, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
      w: "35px",
      h: "35px",
      mr: "10px"
    }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
      src: "https://bit.ly/dan-abramov",
      alt: "Dan Abramov",
      borderRadius: "3px"
    })), /*#__PURE__*/_react.default.createElement(_react2.Text, {
      fontWeight: "semibold",
      fontSize: "18px",
      color: "black.500"
    }, "Nome do Workspace"))), /*#__PURE__*/_react.default.createElement(_react2.MenuItem, null, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
      w: "35px",
      h: "35px",
      mr: "10px"
    }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
      src: "https://bit.ly/dan-abramov",
      alt: "Dan Abramov",
      borderRadius: "3px"
    })), /*#__PURE__*/_react.default.createElement(_react2.Text, {
      fontWeight: "semibold",
      fontSize: "18px",
      color: "black.500"
    }, "Nome do Workspace"))), /*#__PURE__*/_react.default.createElement(_react2.MenuItem, null, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
      w: "35px",
      h: "35px",
      mr: "10px"
    }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
      src: "https://bit.ly/dan-abramov",
      alt: "Dan Abramov",
      borderRadius: "3px"
    })), /*#__PURE__*/_react.default.createElement(_react2.Text, {
      fontWeight: "semibold",
      fontSize: "18px",
      color: "black.500"
    }, "Nome do Workspace"))), /*#__PURE__*/_react.default.createElement(_react2.MenuItem, null, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
      w: "35px",
      h: "35px",
      mr: "10px"
    }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
      src: "https://bit.ly/dan-abramov",
      alt: "Dan Abramov",
      borderRadius: "3px"
    })), /*#__PURE__*/_react.default.createElement(_react2.Text, {
      fontWeight: "semibold",
      fontSize: "18px",
      color: "black.500"
    }, "Nome do Workspace"))), /*#__PURE__*/_react.default.createElement(_react2.MenuItem, null, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
      w: "35px",
      h: "35px",
      mr: "10px"
    }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
      src: "https://bit.ly/dan-abramov",
      alt: "Dan Abramov",
      borderRadius: "3px"
    })), /*#__PURE__*/_react.default.createElement(_react2.Text, {
      fontWeight: "semibold",
      fontSize: "18px",
      color: "black.500"
    }, "Nome do Workspace"))), /*#__PURE__*/_react.default.createElement(_react2.MenuItem, null, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
      w: "35px",
      h: "35px",
      mr: "10px"
    }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
      src: "https://bit.ly/dan-abramov",
      alt: "Dan Abramov",
      borderRadius: "3px"
    })), /*#__PURE__*/_react.default.createElement(_react2.Text, {
      fontWeight: "semibold",
      fontSize: "18px",
      color: "black.500"
    }, "Nome do Workspace"))), /*#__PURE__*/_react.default.createElement(_react2.MenuItem, null, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
      w: "35px",
      h: "35px",
      mr: "10px"
    }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
      src: "https://bit.ly/dan-abramov",
      alt: "Dan Abramov",
      borderRadius: "3px"
    })), /*#__PURE__*/_react.default.createElement(_react2.Text, {
      fontWeight: "semibold",
      fontSize: "18px",
      color: "black.500"
    }, "Nome do Workspace")))));
  }))), /*#__PURE__*/_react.default.createElement(_react2.BreadcrumbItem, null, /*#__PURE__*/_react.default.createElement(_react2.BreadcrumbLink, null, "App"))))), /*#__PURE__*/_react.default.createElement(_react2.GridItem, null, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    alignItems: "center",
    justifyContent: "flex-end"
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    alignItems: "center",
    color: "black.500",
    cursor: "pointer",
    _hover: {
      color: "violet.600",
      transition: "all 0.4s"
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    as: _bi.BiUserPlus,
    mr: "10px",
    fontSize: "24px"
  }), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: "18px",
    fontWeight: "semibold"
  }, "Convidar usu\xE1rio")), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    alignItems: "center",
    ml: "30px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: "18px",
    fontWeight: "semibold",
    mr: "10px"
  }, "Raphael Garcia"), /*#__PURE__*/_react.default.createElement(_react2.Avatar, {
    name: "Kola Tioluwani",
    src: "https://bit.ly/tioluwani-kolawole"
  }))))));
};
var _default = HeaderDefault;
exports.default = _default;