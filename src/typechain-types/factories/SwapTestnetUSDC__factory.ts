/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  SwapTestnetUSDC,
  SwapTestnetUSDCInterface,
} from "../SwapTestnetUSDC";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "usdcToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "compoundUsdcToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "fauceteer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    inputs: [],
    name: "getSupportedTokens",
    outputs: [
      {
        internalType: "address",
        name: "usdcToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "compoundUsdcToken",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161089438038061089483398101604081905261002f916100c2565b60016000556001600160a01b0383811660805282811660a08190526040516333d2e68360e11b81526004810191909152908216906367a5cd0690602401600060405180830381600087803b15801561008657600080fd5b505af115801561009a573d6000803e3d6000fd5b50505050505050610105565b80516001600160a01b03811681146100bd57600080fd5b919050565b6000806000606084860312156100d757600080fd5b6100e0846100a6565b92506100ee602085016100a6565b91506100fc604085016100a6565b90509250925092565b60805160a05161075261014260003960008181606e0152818160f9015261017301526000818160490152818160be015261013801526107526000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063d3c7c2c71461003b578063df791e501461009f575b600080fd5b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000016602082015281519081900390910190f35b6100b26100ad366004610644565b6100b4565b005b6100bc6102b0565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316836001600160a01b0316148061012d57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316836001600160a01b0316145b61013657600080fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614806101a757507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b0316145b6101b057600080fd5b6101c56001600160a01b03841633308461030e565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290526001600160a01b0383169063a9059cbb906044016020604051808303816000875af115801561022b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024f9190610680565b50604080516001600160a01b038086168252841660208201529081018290523360608201527fb3822e221d737fbfd984649052a302a883d38a40f7ae591e3bcb5069eedc2a599060800160405180910390a16102ab6001600055565b505050565b6002600054036103075760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b6002600055565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905261039690859061039c565b50505050565b60006103f1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166104819092919063ffffffff16565b8051909150156102ab578080602001905181019061040f9190610680565b6102ab5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016102fe565b60606104908484600085610498565b949350505050565b6060824710156105105760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016102fe565b600080866001600160a01b0316858760405161052c91906106cd565b60006040518083038185875af1925050503d8060008114610569576040519150601f19603f3d011682016040523d82523d6000602084013e61056e565b606091505b509150915061057f8783838761058a565b979650505050505050565b606083156105f95782516000036105f2576001600160a01b0385163b6105f25760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102fe565b5081610490565b610490838381511561060e5781518083602001fd5b8060405162461bcd60e51b81526004016102fe91906106e9565b80356001600160a01b038116811461063f57600080fd5b919050565b60008060006060848603121561065957600080fd5b61066284610628565b925061067060208501610628565b9150604084013590509250925092565b60006020828403121561069257600080fd5b815180151581146106a257600080fd5b9392505050565b60005b838110156106c45781810151838201526020016106ac565b50506000910152565b600082516106df8184602087016106a9565b9190910192915050565b60208152600082518060208401526107088160408501602087016106a9565b601f01601f1916919091016040019291505056fea2646970667358221220413b93da2bd5bd27312ce6c1f5fa2ece2009a60141cea31de09e992243f65d5464736f6c63430008130033";

type SwapTestnetUSDCConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapTestnetUSDCConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwapTestnetUSDC__factory extends ContractFactory {
  constructor(...args: SwapTestnetUSDCConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    usdcToken: AddressLike,
    compoundUsdcToken: AddressLike,
    fauceteer: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      usdcToken,
      compoundUsdcToken,
      fauceteer,
      overrides || {}
    );
  }
  override deploy(
    usdcToken: AddressLike,
    compoundUsdcToken: AddressLike,
    fauceteer: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      usdcToken,
      compoundUsdcToken,
      fauceteer,
      overrides || {}
    ) as Promise<
      SwapTestnetUSDC & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SwapTestnetUSDC__factory {
    return super.connect(runner) as SwapTestnetUSDC__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapTestnetUSDCInterface {
    return new Interface(_abi) as SwapTestnetUSDCInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SwapTestnetUSDC {
    return new Contract(address, _abi, runner) as unknown as SwapTestnetUSDC;
  }
}